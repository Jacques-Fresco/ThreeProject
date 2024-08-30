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
            //foreach (var header in context.Request.Headers)
            //{
            //    _logger.LogInformation($"{header.Key}: {header.Value}");
            //}

            if (context.Request.Headers.ContainsKey("Authorization"))
            {
                var token = context.Request.Headers["Authorization"].ToString();
                _logger.LogInformation("Received token: " + token);

                if (token.StartsWith("Bearer "))
                {
                    token = token.Substring("Bearer ".Length).Trim();
                    _logger.LogInformation("Extracted JWT token: " + token);
                }
                else
                {
                    _logger.LogWarning("Token format is not Bearer.");
                }
            }
            else
            {
                _logger.LogWarning("Authorization header is missing.");
            }

            await _next(context);
        }
    }
}
