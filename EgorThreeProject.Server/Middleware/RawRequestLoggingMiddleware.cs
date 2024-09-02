namespace EgorThreeProject.Server.Middleware
{
    public class RawRequestLoggingMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<RawRequestLoggingMiddleware> _logger;

        public RawRequestLoggingMiddleware(RequestDelegate next, ILogger<RawRequestLoggingMiddleware> logger)
        {
            _next = next;
            _logger = logger;
        }

        public async Task InvokeAsync(HttpContext context)
        {
            LogHeaders(context);
            LogRequestDetails(context);
            await _next(context);
        }

        private void LogHeaders(HttpContext context)
        {
            foreach (var header in context.Request.Headers)
            {
                _logger.LogInformation($"###{header.Key}: {header.Value}");
            }
        }

        private void LogRequestDetails(HttpContext context)
        {
            _logger.LogInformation($"Request URL: {context.Request.Path}, Method: {context.Request.Method}");

            if (context.Request.Headers.TryGetValue("Authorization", out var authHeader) && authHeader.ToString().StartsWith("Bearer "))
            {
                var token = authHeader.ToString()["Bearer ".Length..].Trim();
                _logger.LogInformation($"Извлеченный JWT токен: {MaskToken(token)}");
            }
            else
            {
                _logger.LogWarning(authHeader.Any() ? "Формат токена не Bearer." : "Заголовок авторизации отсутствует.");
            }
        }

        private string MaskToken(string token) => token.Length <= 8 ? token : $"{token[..4]}...{token[^4..]}";
    }
}
