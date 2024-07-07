/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
(() => {
	var i_ = Object.create;
	var ln = Object.defineProperty;
	var o_ = Object.getOwnPropertyDescriptor;
	var a_ = Object.getOwnPropertyNames;
	var s_ = Object.getPrototypeOf,
		u_ = Object.prototype.hasOwnProperty;
	var me = (e, t) => () => (e && (t = e(e = 0)), t);
	var l = (e, t) => () => (t || e((t = {
			exports: {}
		}).exports, t), t.exports),
		Ge = (e, t) => {
			for (var r in t) ln(e, r, {
				get: t[r],
				enumerable: !0
			})
		},
		Ds = (e, t, r, n) => {
			if (t && typeof t == "object" || typeof t == "function")
				for (let i of a_(t)) !u_.call(e, i) && i !== r && ln(e, i, {
					get: () => t[i],
					enumerable: !(n = o_(t, i)) || n.enumerable
				});
			return e
		};
	var de = (e, t, r) => (r = e != null ? i_(s_(e)) : {}, Ds(t || !e || !e.__esModule ? ln(r, "default", {
			value: e,
			enumerable: !0
		}) : r, e)),
		nt = e => Ds(ln({}, "__esModule", {
			value: !0
		}), e);
	var Mi = l(() => {
		"use strict";
		window.tram = function(e) {
			function t(d, w) {
				var R = new v.Bare;
				return R.init(d, w)
			}

			function r(d) {
				return d.replace(/[A-Z]/g, function(w) {
					return "-" + w.toLowerCase()
				})
			}

			function n(d) {
				var w = parseInt(d.slice(1), 16),
					R = w >> 16 & 255,
					q = w >> 8 & 255,
					S = 255 & w;
				return [R, q, S]
			}

			function i(d, w, R) {
				return "#" + (1 << 24 | d << 16 | w << 8 | R).toString(16).slice(1)
			}

			function o() {}

			function a(d, w) {
				f("Type warning: Expected: [" + d + "] Got: [" + typeof w + "] " + w)
			}

			function s(d, w, R) {
				f("Units do not match [" + d + "]: " + w + ", " + R)
			}

			function u(d, w, R) {
				if (w !== void 0 && (R = w), d === void 0) return R;
				var q = R;
				return Te.test(d) || !Re.test(d) ? q = parseInt(d, 10) : Re.test(d) && (q = 1e3 * parseFloat(d)), 0 > q && (q = 0), q === q ? q : R
			}

			function f(d) {
				ie.debug && window && window.console.warn(d)
			}

			function I(d) {
				for (var w = -1, R = d ? d.length : 0, q = []; ++w < R;) {
					var S = d[w];
					S && q.push(S)
				}
				return q
			}
			var p = function(d, w, R) {
					function q(ae) {
						return typeof ae == "object"
					}

					function S(ae) {
						return typeof ae == "function"
					}

					function F() {}

					function ne(ae, ge) {
						function Z() {
							var Ne = new ue;
							return S(Ne.init) && Ne.init.apply(Ne, arguments), Ne
						}

						function ue() {}
						ge === R && (ge = ae, ae = Object), Z.Bare = ue;
						var ce, _e = F[d] = ae[d],
							rt = ue[d] = Z[d] = new F;
						return rt.constructor = Z, Z.mixin = function(Ne) {
							return ue[d] = Z[d] = ne(Z, Ne)[d], Z
						}, Z.open = function(Ne) {
							if (ce = {}, S(Ne) ? ce = Ne.call(Z, rt, _e, Z, ae) : q(Ne) && (ce = Ne), q(ce))
								for (var Ir in ce) w.call(ce, Ir) && (rt[Ir] = ce[Ir]);
							return S(rt.init) || (rt.init = ae), Z
						}, Z.open(ge)
					}
					return ne
				}("prototype", {}.hasOwnProperty),
				E = {
					ease: ["ease", function(d, w, R, q) {
						var S = (d /= q) * d,
							F = S * d;
						return w + R * (-2.75 * F * S + 11 * S * S + -15.5 * F + 8 * S + .25 * d)
					}],
					"ease-in": ["ease-in", function(d, w, R, q) {
						var S = (d /= q) * d,
							F = S * d;
						return w + R * (-1 * F * S + 3 * S * S + -3 * F + 2 * S)
					}],
					"ease-out": ["ease-out", function(d, w, R, q) {
						var S = (d /= q) * d,
							F = S * d;
						return w + R * (.3 * F * S + -1.6 * S * S + 2.2 * F + -1.8 * S + 1.9 * d)
					}],
					"ease-in-out": ["ease-in-out", function(d, w, R, q) {
						var S = (d /= q) * d,
							F = S * d;
						return w + R * (2 * F * S + -5 * S * S + 2 * F + 2 * S)
					}],
					linear: ["linear", function(d, w, R, q) {
						return R * d / q + w
					}],
					"ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(d, w, R, q) {
						return R * (d /= q) * d + w
					}],
					"ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(d, w, R, q) {
						return -R * (d /= q) * (d - 2) + w
					}],
					"ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(d, w, R, q) {
						return (d /= q / 2) < 1 ? R / 2 * d * d + w : -R / 2 * (--d * (d - 2) - 1) + w
					}],
					"ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(d, w, R, q) {
						return R * (d /= q) * d * d + w
					}],
					"ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(d, w, R, q) {
						return R * ((d = d / q - 1) * d * d + 1) + w
					}],
					"ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(d, w, R, q) {
						return (d /= q / 2) < 1 ? R / 2 * d * d * d + w : R / 2 * ((d -= 2) * d * d + 2) + w
					}],
					"ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(d, w, R, q) {
						return R * (d /= q) * d * d * d + w
					}],
					"ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(d, w, R, q) {
						return -R * ((d = d / q - 1) * d * d * d - 1) + w
					}],
					"ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(d, w, R, q) {
						return (d /= q / 2) < 1 ? R / 2 * d * d * d * d + w : -R / 2 * ((d -= 2) * d * d * d - 2) + w
					}],
					"ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(d, w, R, q) {
						return R * (d /= q) * d * d * d * d + w
					}],
					"ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(d, w, R, q) {
						return R * ((d = d / q - 1) * d * d * d * d + 1) + w
					}],
					"ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(d, w, R, q) {
						return (d /= q / 2) < 1 ? R / 2 * d * d * d * d * d + w : R / 2 * ((d -= 2) * d * d * d * d + 2) + w
					}],
					"ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(d, w, R, q) {
						return -R * Math.cos(d / q * (Math.PI / 2)) + R + w
					}],
					"ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(d, w, R, q) {
						return R * Math.sin(d / q * (Math.PI / 2)) + w
					}],
					"ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(d, w, R, q) {
						return -R / 2 * (Math.cos(Math.PI * d / q) - 1) + w
					}],
					"ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(d, w, R, q) {
						return d === 0 ? w : R * Math.pow(2, 10 * (d / q - 1)) + w
					}],
					"ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(d, w, R, q) {
						return d === q ? w + R : R * (-Math.pow(2, -10 * d / q) + 1) + w
					}],
					"ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(d, w, R, q) {
						return d === 0 ? w : d === q ? w + R : (d /= q / 2) < 1 ? R / 2 * Math.pow(2, 10 * (d - 1)) + w : R / 2 * (-Math.pow(2, -10 * --d) + 2) + w
					}],
					"ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(d, w, R, q) {
						return -R * (Math.sqrt(1 - (d /= q) * d) - 1) + w
					}],
					"ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(d, w, R, q) {
						return R * Math.sqrt(1 - (d = d / q - 1) * d) + w
					}],
					"ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(d, w, R, q) {
						return (d /= q / 2) < 1 ? -R / 2 * (Math.sqrt(1 - d * d) - 1) + w : R / 2 * (Math.sqrt(1 - (d -= 2) * d) + 1) + w
					}],
					"ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(d, w, R, q, S) {
						return S === void 0 && (S = 1.70158), R * (d /= q) * d * ((S + 1) * d - S) + w
					}],
					"ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(d, w, R, q, S) {
						return S === void 0 && (S = 1.70158), R * ((d = d / q - 1) * d * ((S + 1) * d + S) + 1) + w
					}],
					"ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(d, w, R, q, S) {
						return S === void 0 && (S = 1.70158), (d /= q / 2) < 1 ? R / 2 * d * d * (((S *= 1.525) + 1) * d - S) + w : R / 2 * ((d -= 2) * d * (((S *= 1.525) + 1) * d + S) + 2) + w
					}]
				},
				m = {
					"ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
					"ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
					"ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
				},
				b = document,
				T = window,
				O = "bkwld-tram",
				x = /[\-\.0-9]/g,
				M = /[A-Z]/,
				P = "number",
				V = /^(rgb|#)/,
				W = /(em|cm|mm|in|pt|pc|px)$/,
				D = /(em|cm|mm|in|pt|pc|px|%)$/,
				$ = /(deg|rad|turn)$/,
				z = "unitless",
				Y = /(all|none) 0s ease 0s/,
				te = /^(width|height)$/,
				j = " ",
				C = b.createElement("a"),
				_ = ["Webkit", "Moz", "O", "ms"],
				L = ["-webkit-", "-moz-", "-o-", "-ms-"],
				k = function(d) {
					if (d in C.style) return {
						dom: d,
						css: d
					};
					var w, R, q = "",
						S = d.split("-");
					for (w = 0; w < S.length; w++) q += S[w].charAt(0).toUpperCase() + S[w].slice(1);
					for (w = 0; w < _.length; w++)
						if (R = _[w] + q, R in C.style) return {
							dom: R,
							css: L[w] + d
						}
				},
				H = t.support = {
					bind: Function.prototype.bind,
					transform: k("transform"),
					transition: k("transition"),
					backface: k("backface-visibility"),
					timing: k("transition-timing-function")
				};
			if (H.transition) {
				var ee = H.timing.dom;
				if (C.style[ee] = E["ease-in-back"][0], !C.style[ee])
					for (var re in m) E[re][0] = m[re]
			}
			var U = t.frame = function() {
					var d = T.requestAnimationFrame || T.webkitRequestAnimationFrame || T.mozRequestAnimationFrame || T.oRequestAnimationFrame || T.msRequestAnimationFrame;
					return d && H.bind ? d.bind(T) : function(w) {
						T.setTimeout(w, 16)
					}
				}(),
				B = t.now = function() {
					var d = T.performance,
						w = d && (d.now || d.webkitNow || d.msNow || d.mozNow);
					return w && H.bind ? w.bind(d) : Date.now || function() {
						return +new Date
					}
				}(),
				g = p(function(d) {
					function w(oe, fe) {
						var Ee = I(("" + oe).split(j)),
							pe = Ee[0];
						fe = fe || {};
						var Pe = K[pe];
						if (!Pe) return f("Unsupported property: " + pe);
						if (!fe.weak || !this.props[pe]) {
							var je = Pe[0],
								ke = this.props[pe];
							return ke || (ke = this.props[pe] = new je.Bare), ke.init(this.$el, Ee, Pe, fe), ke
						}
					}

					function R(oe, fe, Ee) {
						if (oe) {
							var pe = typeof oe;
							if (fe || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), pe == "number" && fe) return this.timer = new Q({
								duration: oe,
								context: this,
								complete: F
							}), void(this.active = !0);
							if (pe == "string" && fe) {
								switch (oe) {
									case "hide":
										Z.call(this);
										break;
									case "stop":
										ne.call(this);
										break;
									case "redraw":
										ue.call(this);
										break;
									default:
										w.call(this, oe, Ee && Ee[1])
								}
								return F.call(this)
							}
							if (pe == "function") return void oe.call(this, this);
							if (pe == "object") {
								var Pe = 0;
								rt.call(this, oe, function(Ie, n_) {
									Ie.span > Pe && (Pe = Ie.span), Ie.stop(), Ie.animate(n_)
								}, function(Ie) {
									"wait" in Ie && (Pe = u(Ie.wait, 0))
								}), _e.call(this), Pe > 0 && (this.timer = new Q({
									duration: Pe,
									context: this
								}), this.active = !0, fe && (this.timer.complete = F));
								var je = this,
									ke = !1,
									cn = {};
								U(function() {
									rt.call(je, oe, function(Ie) {
										Ie.active && (ke = !0, cn[Ie.name] = Ie.nextStyle)
									}), ke && je.$el.css(cn)
								})
							}
						}
					}

					function q(oe) {
						oe = u(oe, 0), this.active ? this.queue.push({
							options: oe
						}) : (this.timer = new Q({
							duration: oe,
							context: this,
							complete: F
						}), this.active = !0)
					}

					function S(oe) {
						return this.active ? (this.queue.push({
							options: oe,
							args: arguments
						}), void(this.timer.complete = F)) : f("No active transition timer. Use start() or wait() before then().")
					}

					function F() {
						if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
							var oe = this.queue.shift();
							R.call(this, oe.options, !0, oe.args)
						}
					}

					function ne(oe) {
						this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
						var fe;
						typeof oe == "string" ? (fe = {}, fe[oe] = 1) : fe = typeof oe == "object" && oe != null ? oe : this.props, rt.call(this, fe, Ne), _e.call(this)
					}

					function ae(oe) {
						ne.call(this, oe), rt.call(this, oe, Ir, t_)
					}

					function ge(oe) {
						typeof oe != "string" && (oe = "block"), this.el.style.display = oe
					}

					function Z() {
						ne.call(this), this.el.style.display = "none"
					}

					function ue() {
						this.el.offsetHeight
					}

					function ce() {
						ne.call(this), e.removeData(this.el, O), this.$el = this.el = null
					}

					function _e() {
						var oe, fe, Ee = [];
						this.upstream && Ee.push(this.upstream);
						for (oe in this.props) fe = this.props[oe], fe.active && Ee.push(fe.string);
						Ee = Ee.join(","), this.style !== Ee && (this.style = Ee, this.el.style[H.transition.dom] = Ee)
					}

					function rt(oe, fe, Ee) {
						var pe, Pe, je, ke, cn = fe !== Ne,
							Ie = {};
						for (pe in oe) je = oe[pe], pe in le ? (Ie.transform || (Ie.transform = {}), Ie.transform[pe] = je) : (M.test(pe) && (pe = r(pe)), pe in K ? Ie[pe] = je : (ke || (ke = {}), ke[pe] = je));
						for (pe in Ie) {
							if (je = Ie[pe], Pe = this.props[pe], !Pe) {
								if (!cn) continue;
								Pe = w.call(this, pe)
							}
							fe.call(this, Pe, je)
						}
						Ee && ke && Ee.call(this, ke)
					}

					function Ne(oe) {
						oe.stop()
					}

					function Ir(oe, fe) {
						oe.set(fe)
					}

					function t_(oe) {
						this.$el.css(oe)
					}

					function Xe(oe, fe) {
						d[oe] = function() {
							return this.children ? r_.call(this, fe, arguments) : (this.el && fe.apply(this, arguments), this)
						}
					}

					function r_(oe, fe) {
						var Ee, pe = this.children.length;
						for (Ee = 0; pe > Ee; Ee++) oe.apply(this.children[Ee], fe);
						return this
					}
					d.init = function(oe) {
						if (this.$el = e(oe), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, ie.keepInherited && !ie.fallback) {
							var fe = X(this.el, "transition");
							fe && !Y.test(fe) && (this.upstream = fe)
						}
						H.backface && ie.hideBackface && y(this.el, H.backface.css, "hidden")
					}, Xe("add", w), Xe("start", R), Xe("wait", q), Xe("then", S), Xe("next", F), Xe("stop", ne), Xe("set", ae), Xe("show", ge), Xe("hide", Z), Xe("redraw", ue), Xe("destroy", ce)
				}),
				v = p(g, function(d) {
					function w(R, q) {
						var S = e.data(R, O) || e.data(R, O, new g.Bare);
						return S.el || S.init(R), q ? S.start(q) : S
					}
					d.init = function(R, q) {
						var S = e(R);
						if (!S.length) return this;
						if (S.length === 1) return w(S[0], q);
						var F = [];
						return S.each(function(ne, ae) {
							F.push(w(ae, q))
						}), this.children = F, this
					}
				}),
				h = p(function(d) {
					function w() {
						var F = this.get();
						this.update("auto");
						var ne = this.get();
						return this.update(F), ne
					}

					function R(F, ne, ae) {
						return ne !== void 0 && (ae = ne), F in E ? F : ae
					}

					function q(F) {
						var ne = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(F);
						return (ne ? i(ne[1], ne[2], ne[3]) : F).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
					}
					var S = {
						duration: 500,
						ease: "ease",
						delay: 0
					};
					d.init = function(F, ne, ae, ge) {
						this.$el = F, this.el = F[0];
						var Z = ne[0];
						ae[2] && (Z = ae[2]), J[Z] && (Z = J[Z]), this.name = Z, this.type = ae[1], this.duration = u(ne[1], this.duration, S.duration), this.ease = R(ne[2], this.ease, S.ease), this.delay = u(ne[3], this.delay, S.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = te.test(this.name), this.unit = ge.unit || this.unit || ie.defaultUnit, this.angle = ge.angle || this.angle || ie.defaultAngle, ie.fallback || ge.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + j + this.duration + "ms" + (this.ease != "ease" ? j + E[this.ease][0] : "") + (this.delay ? j + this.delay + "ms" : ""))
					}, d.set = function(F) {
						F = this.convert(F, this.type), this.update(F), this.redraw()
					}, d.transition = function(F) {
						this.active = !0, F = this.convert(F, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), F == "auto" && (F = w.call(this))), this.nextStyle = F
					}, d.fallback = function(F) {
						var ne = this.el.style[this.name] || this.convert(this.get(), this.type);
						F = this.convert(F, this.type), this.auto && (ne == "auto" && (ne = this.convert(this.get(), this.type)), F == "auto" && (F = w.call(this))), this.tween = new A({
							from: ne,
							to: F,
							duration: this.duration,
							delay: this.delay,
							ease: this.ease,
							update: this.update,
							context: this
						})
					}, d.get = function() {
						return X(this.el, this.name)
					}, d.update = function(F) {
						y(this.el, this.name, F)
					}, d.stop = function() {
						(this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, y(this.el, this.name, this.get()));
						var F = this.tween;
						F && F.context && F.destroy()
					}, d.convert = function(F, ne) {
						if (F == "auto" && this.auto) return F;
						var ae, ge = typeof F == "number",
							Z = typeof F == "string";
						switch (ne) {
							case P:
								if (ge) return F;
								if (Z && F.replace(x, "") === "") return +F;
								ae = "number(unitless)";
								break;
							case V:
								if (Z) {
									if (F === "" && this.original) return this.original;
									if (ne.test(F)) return F.charAt(0) == "#" && F.length == 7 ? F : q(F)
								}
								ae = "hex or rgb string";
								break;
							case W:
								if (ge) return F + this.unit;
								if (Z && ne.test(F)) return F;
								ae = "number(px) or string(unit)";
								break;
							case D:
								if (ge) return F + this.unit;
								if (Z && ne.test(F)) return F;
								ae = "number(px) or string(unit or %)";
								break;
							case $:
								if (ge) return F + this.angle;
								if (Z && ne.test(F)) return F;
								ae = "number(deg) or string(angle)";
								break;
							case z:
								if (ge || Z && D.test(F)) return F;
								ae = "number(unitless) or string(unit or %)"
						}
						return a(ae, F), F
					}, d.redraw = function() {
						this.el.offsetHeight
					}
				}),
				c = p(h, function(d, w) {
					d.init = function() {
						w.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), V))
					}
				}),
				N = p(h, function(d, w) {
					d.init = function() {
						w.init.apply(this, arguments), this.animate = this.fallback
					}, d.get = function() {
						return this.$el[this.name]()
					}, d.update = function(R) {
						this.$el[this.name](R)
					}
				}),
				G = p(h, function(d, w) {
					function R(q, S) {
						var F, ne, ae, ge, Z;
						for (F in q) ge = le[F], ae = ge[0], ne = ge[1] || F, Z = this.convert(q[F], ae), S.call(this, ne, Z, ae)
					}
					d.init = function() {
						w.init.apply(this, arguments), this.current || (this.current = {}, le.perspective && ie.perspective && (this.current.perspective = ie.perspective, y(this.el, this.name, this.style(this.current)), this.redraw()))
					}, d.set = function(q) {
						R.call(this, q, function(S, F) {
							this.current[S] = F
						}), y(this.el, this.name, this.style(this.current)), this.redraw()
					}, d.transition = function(q) {
						var S = this.values(q);
						this.tween = new se({
							current: this.current,
							values: S,
							duration: this.duration,
							delay: this.delay,
							ease: this.ease
						});
						var F, ne = {};
						for (F in this.current) ne[F] = F in S ? S[F] : this.current[F];
						this.active = !0, this.nextStyle = this.style(ne)
					}, d.fallback = function(q) {
						var S = this.values(q);
						this.tween = new se({
							current: this.current,
							values: S,
							duration: this.duration,
							delay: this.delay,
							ease: this.ease,
							update: this.update,
							context: this
						})
					}, d.update = function() {
						y(this.el, this.name, this.style(this.current))
					}, d.style = function(q) {
						var S, F = "";
						for (S in q) F += S + "(" + q[S] + ") ";
						return F
					}, d.values = function(q) {
						var S, F = {};
						return R.call(this, q, function(ne, ae, ge) {
							F[ne] = ae, this.current[ne] === void 0 && (S = 0, ~ne.indexOf("scale") && (S = 1), this.current[ne] = this.convert(S, ge))
						}), F
					}
				}),
				A = p(function(d) {
					function w(Z) {
						ae.push(Z) === 1 && U(R)
					}

					function R() {
						var Z, ue, ce, _e = ae.length;
						if (_e)
							for (U(R), ue = B(), Z = _e; Z--;) ce = ae[Z], ce && ce.render(ue)
					}

					function q(Z) {
						var ue, ce = e.inArray(Z, ae);
						ce >= 0 && (ue = ae.slice(ce + 1), ae.length = ce, ue.length && (ae = ae.concat(ue)))
					}

					function S(Z) {
						return Math.round(Z * ge) / ge
					}

					function F(Z, ue, ce) {
						return i(Z[0] + ce * (ue[0] - Z[0]), Z[1] + ce * (ue[1] - Z[1]), Z[2] + ce * (ue[2] - Z[2]))
					}
					var ne = {
						ease: E.ease[1],
						from: 0,
						to: 1
					};
					d.init = function(Z) {
						this.duration = Z.duration || 0, this.delay = Z.delay || 0;
						var ue = Z.ease || ne.ease;
						E[ue] && (ue = E[ue][1]), typeof ue != "function" && (ue = ne.ease), this.ease = ue, this.update = Z.update || o, this.complete = Z.complete || o, this.context = Z.context || this, this.name = Z.name;
						var ce = Z.from,
							_e = Z.to;
						ce === void 0 && (ce = ne.from), _e === void 0 && (_e = ne.to), this.unit = Z.unit || "", typeof ce == "number" && typeof _e == "number" ? (this.begin = ce, this.change = _e - ce) : this.format(_e, ce), this.value = this.begin + this.unit, this.start = B(), Z.autoplay !== !1 && this.play()
					}, d.play = function() {
						this.active || (this.start || (this.start = B()), this.active = !0, w(this))
					}, d.stop = function() {
						this.active && (this.active = !1, q(this))
					}, d.render = function(Z) {
						var ue, ce = Z - this.start;
						if (this.delay) {
							if (ce <= this.delay) return;
							ce -= this.delay
						}
						if (ce < this.duration) {
							var _e = this.ease(ce, 0, 1, this.duration);
							return ue = this.startRGB ? F(this.startRGB, this.endRGB, _e) : S(this.begin + _e * this.change), this.value = ue + this.unit, void this.update.call(this.context, this.value)
						}
						ue = this.endHex || this.begin + this.change, this.value = ue + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
					}, d.format = function(Z, ue) {
						if (ue += "", Z += "", Z.charAt(0) == "#") return this.startRGB = n(ue), this.endRGB = n(Z), this.endHex = Z, this.begin = 0, void(this.change = 1);
						if (!this.unit) {
							var ce = ue.replace(x, ""),
								_e = Z.replace(x, "");
							ce !== _e && s("tween", ue, Z), this.unit = ce
						}
						ue = parseFloat(ue), Z = parseFloat(Z), this.begin = this.value = ue, this.change = Z - ue
					}, d.destroy = function() {
						this.stop(), this.context = null, this.ease = this.update = this.complete = o
					};
					var ae = [],
						ge = 1e3
				}),
				Q = p(A, function(d) {
					d.init = function(w) {
						this.duration = w.duration || 0, this.complete = w.complete || o, this.context = w.context, this.play()
					}, d.render = function(w) {
						var R = w - this.start;
						R < this.duration || (this.complete.call(this.context), this.destroy())
					}
				}),
				se = p(A, function(d, w) {
					d.init = function(R) {
						this.context = R.context, this.update = R.update, this.tweens = [], this.current = R.current;
						var q, S;
						for (q in R.values) S = R.values[q], this.current[q] !== S && this.tweens.push(new A({
							name: q,
							from: this.current[q],
							to: S,
							duration: R.duration,
							delay: R.delay,
							ease: R.ease,
							autoplay: !1
						}));
						this.play()
					}, d.render = function(R) {
						var q, S, F = this.tweens.length,
							ne = !1;
						for (q = F; q--;) S = this.tweens[q], S.context && (S.render(R), this.current[S.name] = S.value, ne = !0);
						return ne ? void(this.update && this.update.call(this.context)) : this.destroy()
					}, d.destroy = function() {
						if (w.destroy.call(this), this.tweens) {
							var R, q = this.tweens.length;
							for (R = q; R--;) this.tweens[R].destroy();
							this.tweens = null, this.current = null
						}
					}
				}),
				ie = t.config = {
					debug: !1,
					defaultUnit: "px",
					defaultAngle: "deg",
					keepInherited: !1,
					hideBackface: !1,
					perspective: "",
					fallback: !H.transition,
					agentTests: []
				};
			t.fallback = function(d) {
				if (!H.transition) return ie.fallback = !0;
				ie.agentTests.push("(" + d + ")");
				var w = new RegExp(ie.agentTests.join("|"), "i");
				ie.fallback = w.test(navigator.userAgent)
			}, t.fallback("6.0.[2-5] Safari"), t.tween = function(d) {
				return new A(d)
			}, t.delay = function(d, w, R) {
				return new Q({
					complete: w,
					duration: d,
					context: R
				})
			}, e.fn.tram = function(d) {
				return t.call(null, this, d)
			};
			var y = e.style,
				X = e.css,
				J = {
					transform: H.transform && H.transform.css
				},
				K = {
					color: [c, V],
					background: [c, V, "background-color"],
					"outline-color": [c, V],
					"border-color": [c, V],
					"border-top-color": [c, V],
					"border-right-color": [c, V],
					"border-bottom-color": [c, V],
					"border-left-color": [c, V],
					"border-width": [h, W],
					"border-top-width": [h, W],
					"border-right-width": [h, W],
					"border-bottom-width": [h, W],
					"border-left-width": [h, W],
					"border-spacing": [h, W],
					"letter-spacing": [h, W],
					margin: [h, W],
					"margin-top": [h, W],
					"margin-right": [h, W],
					"margin-bottom": [h, W],
					"margin-left": [h, W],
					padding: [h, W],
					"padding-top": [h, W],
					"padding-right": [h, W],
					"padding-bottom": [h, W],
					"padding-left": [h, W],
					"outline-width": [h, W],
					opacity: [h, P],
					top: [h, D],
					right: [h, D],
					bottom: [h, D],
					left: [h, D],
					"font-size": [h, D],
					"text-indent": [h, D],
					"word-spacing": [h, D],
					width: [h, D],
					"min-width": [h, D],
					"max-width": [h, D],
					height: [h, D],
					"min-height": [h, D],
					"max-height": [h, D],
					"line-height": [h, z],
					"scroll-top": [N, P, "scrollTop"],
					"scroll-left": [N, P, "scrollLeft"]
				},
				le = {};
			H.transform && (K.transform = [G], le = {
				x: [D, "translateX"],
				y: [D, "translateY"],
				rotate: [$],
				rotateX: [$],
				rotateY: [$],
				scale: [P],
				scaleX: [P],
				scaleY: [P],
				skew: [$],
				skewX: [$],
				skewY: [$]
			}), H.transform && H.backface && (le.z = [D, "translateZ"], le.rotateZ = [$], le.scaleZ = [P], le.perspective = [W]);
			var Te = /ms/,
				Re = /s|\./;
			return e.tram = t
		}(window.jQuery)
	});
	var Gs = l((tH, ks) => {
		"use strict";
		var c_ = window.$,
			l_ = Mi() && c_.tram;
		ks.exports = function() {
			var e = {};
			e.VERSION = "1.6.0-Webflow";
			var t = {},
				r = Array.prototype,
				n = Object.prototype,
				i = Function.prototype,
				o = r.push,
				a = r.slice,
				s = r.concat,
				u = n.toString,
				f = n.hasOwnProperty,
				I = r.forEach,
				p = r.map,
				E = r.reduce,
				m = r.reduceRight,
				b = r.filter,
				T = r.every,
				O = r.some,
				x = r.indexOf,
				M = r.lastIndexOf,
				P = Array.isArray,
				V = Object.keys,
				W = i.bind,
				D = e.each = e.forEach = function(_, L, k) {
					if (_ == null) return _;
					if (I && _.forEach === I) _.forEach(L, k);
					else if (_.length === +_.length) {
						for (var H = 0, ee = _.length; H < ee; H++)
							if (L.call(k, _[H], H, _) === t) return
					} else
						for (var re = e.keys(_), H = 0, ee = re.length; H < ee; H++)
							if (L.call(k, _[re[H]], re[H], _) === t) return;
					return _
				};
			e.map = e.collect = function(_, L, k) {
				var H = [];
				return _ == null ? H : p && _.map === p ? _.map(L, k) : (D(_, function(ee, re, U) {
					H.push(L.call(k, ee, re, U))
				}), H)
			}, e.find = e.detect = function(_, L, k) {
				var H;
				return $(_, function(ee, re, U) {
					if (L.call(k, ee, re, U)) return H = ee, !0
				}), H
			}, e.filter = e.select = function(_, L, k) {
				var H = [];
				return _ == null ? H : b && _.filter === b ? _.filter(L, k) : (D(_, function(ee, re, U) {
					L.call(k, ee, re, U) && H.push(ee)
				}), H)
			};
			var $ = e.some = e.any = function(_, L, k) {
				L || (L = e.identity);
				var H = !1;
				return _ == null ? H : O && _.some === O ? _.some(L, k) : (D(_, function(ee, re, U) {
					if (H || (H = L.call(k, ee, re, U))) return t
				}), !!H)
			};
			e.contains = e.include = function(_, L) {
				return _ == null ? !1 : x && _.indexOf === x ? _.indexOf(L) != -1 : $(_, function(k) {
					return k === L
				})
			}, e.delay = function(_, L) {
				var k = a.call(arguments, 2);
				return setTimeout(function() {
					return _.apply(null, k)
				}, L)
			}, e.defer = function(_) {
				return e.delay.apply(e, [_, 1].concat(a.call(arguments, 1)))
			}, e.throttle = function(_) {
				var L, k, H;
				return function() {
					L || (L = !0, k = arguments, H = this, l_.frame(function() {
						L = !1, _.apply(H, k)
					}))
				}
			}, e.debounce = function(_, L, k) {
				var H, ee, re, U, B, g = function() {
					var v = e.now() - U;
					v < L ? H = setTimeout(g, L - v) : (H = null, k || (B = _.apply(re, ee), re = ee = null))
				};
				return function() {
					re = this, ee = arguments, U = e.now();
					var v = k && !H;
					return H || (H = setTimeout(g, L)), v && (B = _.apply(re, ee), re = ee = null), B
				}
			}, e.defaults = function(_) {
				if (!e.isObject(_)) return _;
				for (var L = 1, k = arguments.length; L < k; L++) {
					var H = arguments[L];
					for (var ee in H) _[ee] === void 0 && (_[ee] = H[ee])
				}
				return _
			}, e.keys = function(_) {
				if (!e.isObject(_)) return [];
				if (V) return V(_);
				var L = [];
				for (var k in _) e.has(_, k) && L.push(k);
				return L
			}, e.has = function(_, L) {
				return f.call(_, L)
			}, e.isObject = function(_) {
				return _ === Object(_)
			}, e.now = Date.now || function() {
				return new Date().getTime()
			}, e.templateSettings = {
				evaluate: /<%([\s\S]+?)%>/g,
				interpolate: /<%=([\s\S]+?)%>/g,
				escape: /<%-([\s\S]+?)%>/g
			};
			var z = /(.)^/,
				Y = {
					"'": "'",
					"\\": "\\",
					"\r": "r",
					"\n": "n",
					"\u2028": "u2028",
					"\u2029": "u2029"
				},
				te = /\\|'|\r|\n|\u2028|\u2029/g,
				j = function(_) {
					return "\\" + Y[_]
				},
				C = /^\s*(\w|\$)+\s*$/;
			return e.template = function(_, L, k) {
				!L && k && (L = k), L = e.defaults({}, L, e.templateSettings);
				var H = RegExp([(L.escape || z).source, (L.interpolate || z).source, (L.evaluate || z).source].join("|") + "|$", "g"),
					ee = 0,
					re = "__p+='";
				_.replace(H, function(v, h, c, N, G) {
					return re += _.slice(ee, G).replace(te, j), ee = G + v.length, h ? re += `'+
((__t=(` + h + `))==null?'':_.escape(__t))+
'` : c ? re += `'+
((__t=(` + c + `))==null?'':__t)+
'` : N && (re += `';
` + N + `
__p+='`), v
				}), re += `';
`;
				var U = L.variable;
				if (U) {
					if (!C.test(U)) throw new Error("variable is not a bare identifier: " + U)
				} else re = `with(obj||{}){
` + re + `}
`, U = "obj";
				re = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + re + `return __p;
`;
				var B;
				try {
					B = new Function(L.variable || "obj", "_", re)
				} catch (v) {
					throw v.source = re, v
				}
				var g = function(v) {
					return B.call(this, v, e)
				};
				return g.source = "function(" + U + `){
` + re + "}", g
			}, e
		}()
	});
	var qe = l((rH, zs) => {
		"use strict";
		var ve = {},
			Wt = {},
			Bt = [],
			Di = window.Webflow || [],
			bt = window.jQuery,
			Ke = bt(window),
			f_ = bt(document),
			it = bt.isFunction,
			ze = ve._ = Gs(),
			Vs = ve.tram = Mi() && bt.tram,
			dn = !1,
			ki = !1;
		Vs.config.hideBackface = !1;
		Vs.config.keepInherited = !0;
		ve.define = function(e, t, r) {
			Wt[e] && Ws(Wt[e]);
			var n = Wt[e] = t(bt, ze, r) || {};
			return Hs(n), n
		};
		ve.require = function(e) {
			return Wt[e]
		};

		function Hs(e) {
			ve.env() && (it(e.design) && Ke.on("__wf_design", e.design), it(e.preview) && Ke.on("__wf_preview", e.preview)), it(e.destroy) && Ke.on("__wf_destroy", e.destroy), e.ready && it(e.ready) && d_(e)
		}

		function d_(e) {
			if (dn) {
				e.ready();
				return
			}
			ze.contains(Bt, e.ready) || Bt.push(e.ready)
		}

		function Ws(e) {
			it(e.design) && Ke.off("__wf_design", e.design), it(e.preview) && Ke.off("__wf_preview", e.preview), it(e.destroy) && Ke.off("__wf_destroy", e.destroy), e.ready && it(e.ready) && p_(e)
		}

		function p_(e) {
			Bt = ze.filter(Bt, function(t) {
				return t !== e.ready
			})
		}
		ve.push = function(e) {
			if (dn) {
				it(e) && e();
				return
			}
			Di.push(e)
		};
		ve.env = function(e) {
			var t = window.__wf_design,
				r = typeof t < "u";
			if (!e) return r;
			if (e === "design") return r && t;
			if (e === "preview") return r && !t;
			if (e === "slug") return r && window.__wf_slug;
			if (e === "editor") return window.WebflowEditor;
			if (e === "test") return window.__wf_test;
			if (e === "frame") return window !== window.top
		};
		var fn = navigator.userAgent.toLowerCase(),
			Bs = ve.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
			v_ = ve.env.chrome = /chrome/.test(fn) && /Google/.test(navigator.vendor) && parseInt(fn.match(/chrome\/(\d+)\./)[1], 10),
			g_ = ve.env.ios = /(ipod|iphone|ipad)/.test(fn);
		ve.env.safari = /safari/.test(fn) && !v_ && !g_;
		var Fi;
		Bs && f_.on("touchstart mousedown", function(e) {
			Fi = e.target
		});
		ve.validClick = Bs ? function(e) {
			return e === Fi || bt.contains(e, Fi)
		} : function() {
			return !0
		};
		var Xs = "resize.webflow orientationchange.webflow load.webflow",
			h_ = "scroll.webflow " + Xs;
		ve.resize = Gi(Ke, Xs);
		ve.scroll = Gi(Ke, h_);
		ve.redraw = Gi();

		function Gi(e, t) {
			var r = [],
				n = {};
			return n.up = ze.throttle(function(i) {
				ze.each(r, function(o) {
					o(i)
				})
			}), e && t && e.on(t, n.up), n.on = function(i) {
				typeof i == "function" && (ze.contains(r, i) || r.push(i))
			}, n.off = function(i) {
				if (!arguments.length) {
					r = [];
					return
				}
				r = ze.filter(r, function(o) {
					return o !== i
				})
			}, n
		}
		ve.location = function(e) {
			window.location = e
		};
		ve.env() && (ve.location = function() {});
		ve.ready = function() {
			dn = !0, ki ? m_() : ze.each(Bt, Us), ze.each(Di, Us), ve.resize.up()
		};

		function Us(e) {
			it(e) && e()
		}

		function m_() {
			ki = !1, ze.each(Wt, Hs)
		}
		var Lt;
		ve.load = function(e) {
			Lt.then(e)
		};

		function js() {
			Lt && (Lt.reject(), Ke.off("load", Lt.resolve)), Lt = new bt.Deferred, Ke.on("load", Lt.resolve)
		}
		ve.destroy = function(e) {
			e = e || {}, ki = !0, Ke.triggerHandler("__wf_destroy"), e.domready != null && (dn = e.domready), ze.each(Wt, Ws), ve.resize.off(), ve.scroll.off(), ve.redraw.off(), Bt = [], Di = [], Lt.state() === "pending" && js()
		};
		bt(ve.ready);
		js();
		zs.exports = window.Webflow = ve
	});
	var Qs = l((nH, Ys) => {
		"use strict";
		var Ks = qe();
		Ks.define("brand", Ys.exports = function(e) {
			var t = {},
				r = document,
				n = e("html"),
				i = e("body"),
				o = ".w-webflow-badge",
				a = window.location,
				s = /PhantomJS/i.test(navigator.userAgent),
				u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
				f;
			t.ready = function() {
				var m = n.attr("data-wf-status"),
					b = n.attr("data-wf-domain") || "";
				/\.webflow\.io$/i.test(b) && a.hostname !== b && (m = !0), m && !s && (f = f || p(), E(), setTimeout(E, 500), e(r).off(u, I).on(u, I))
			};

			function I() {
				var m = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
				e(f).attr("style", m ? "display: none !important;" : "")
			}

			function p() {
				var m = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
					b = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
						marginRight: "4px",
						width: "26px"
					}),
					T = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
				return m.append(b, T), m[0]
			}

			function E() {
				var m = i.children(o),
					b = m.length && m.get(0) === f,
					T = Ks.env("editor");
				if (b) {
					T && m.remove();
					return
				}
				m.length && m.remove(), T || i.append(f)
			}
			return t
		})
	});
	var Zs = l((iH, $s) => {
		"use strict";
		var y_ = qe();
		y_.define("focus-visible", $s.exports = function() {
			function e(r) {
				var n = !0,
					i = !1,
					o = null,
					a = {
						text: !0,
						search: !0,
						url: !0,
						tel: !0,
						email: !0,
						password: !0,
						number: !0,
						date: !0,
						month: !0,
						week: !0,
						time: !0,
						datetime: !0,
						"datetime-local": !0
					};

				function s(P) {
					return !!(P && P !== document && P.nodeName !== "HTML" && P.nodeName !== "BODY" && "classList" in P && "contains" in P.classList)
				}

				function u(P) {
					var V = P.type,
						W = P.tagName;
					return !!(W === "INPUT" && a[V] && !P.readOnly || W === "TEXTAREA" && !P.readOnly || P.isContentEditable)
				}

				function f(P) {
					P.getAttribute("data-wf-focus-visible") || P.setAttribute("data-wf-focus-visible", "true")
				}

				function I(P) {
					P.getAttribute("data-wf-focus-visible") && P.removeAttribute("data-wf-focus-visible")
				}

				function p(P) {
					P.metaKey || P.altKey || P.ctrlKey || (s(r.activeElement) && f(r.activeElement), n = !0)
				}

				function E() {
					n = !1
				}

				function m(P) {
					s(P.target) && (n || u(P.target)) && f(P.target)
				}

				function b(P) {
					s(P.target) && P.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function() {
						i = !1
					}, 100), I(P.target))
				}

				function T() {
					document.visibilityState === "hidden" && (i && (n = !0), O())
				}

				function O() {
					document.addEventListener("mousemove", M), document.addEventListener("mousedown", M), document.addEventListener("mouseup", M), document.addEventListener("pointermove", M), document.addEventListener("pointerdown", M), document.addEventListener("pointerup", M), document.addEventListener("touchmove", M), document.addEventListener("touchstart", M), document.addEventListener("touchend", M)
				}

				function x() {
					document.removeEventListener("mousemove", M), document.removeEventListener("mousedown", M), document.removeEventListener("mouseup", M), document.removeEventListener("pointermove", M), document.removeEventListener("pointerdown", M), document.removeEventListener("pointerup", M), document.removeEventListener("touchmove", M), document.removeEventListener("touchstart", M), document.removeEventListener("touchend", M)
				}

				function M(P) {
					P.target.nodeName && P.target.nodeName.toLowerCase() === "html" || (n = !1, x())
				}
				document.addEventListener("keydown", p, !0), document.addEventListener("mousedown", E, !0), document.addEventListener("pointerdown", E, !0), document.addEventListener("touchstart", E, !0), document.addEventListener("visibilitychange", T, !0), O(), r.addEventListener("focus", m, !0), r.addEventListener("blur", b, !0)
			}

			function t() {
				if (typeof document < "u") try {
					document.querySelector(":focus-visible")
				} catch {
					e(document)
				}
			}
			return {
				ready: t
			}
		})
	});
	var tu = l((oH, eu) => {
		"use strict";
		var Js = qe();
		Js.define("focus", eu.exports = function() {
			var e = [],
				t = !1;

			function r(a) {
				t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a))
			}

			function n(a) {
				var s = a.target,
					u = s.tagName;
				return /^a$/i.test(u) && s.href != null || /^(button|textarea)$/i.test(u) && s.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && s.controls === !0
			}

			function i(a) {
				n(a) && (t = !0, setTimeout(() => {
					for (t = !1, a.target.focus(); e.length > 0;) {
						var s = e.pop();
						s.target.dispatchEvent(new MouseEvent(s.type, s))
					}
				}, 0))
			}

			function o() {
				typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Js.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
			}
			return {
				ready: o
			}
		})
	});
	var iu = l((aH, nu) => {
		"use strict";
		var Ui = window.jQuery,
			ot = {},
			pn = [],
			ru = ".w-ix",
			vn = {
				reset: function(e, t) {
					t.__wf_intro = null
				},
				intro: function(e, t) {
					t.__wf_intro || (t.__wf_intro = !0, Ui(t).triggerHandler(ot.types.INTRO))
				},
				outro: function(e, t) {
					t.__wf_intro && (t.__wf_intro = null, Ui(t).triggerHandler(ot.types.OUTRO))
				}
			};
		ot.triggers = {};
		ot.types = {
			INTRO: "w-ix-intro" + ru,
			OUTRO: "w-ix-outro" + ru
		};
		ot.init = function() {
			for (var e = pn.length, t = 0; t < e; t++) {
				var r = pn[t];
				r[0](0, r[1])
			}
			pn = [], Ui.extend(ot.triggers, vn)
		};
		ot.async = function() {
			for (var e in vn) {
				var t = vn[e];
				vn.hasOwnProperty(e) && (ot.triggers[e] = function(r, n) {
					pn.push([t, n])
				})
			}
		};
		ot.async();
		nu.exports = ot
	});
	var Xt = l((sH, su) => {
		"use strict";
		var Vi = iu();

		function ou(e, t) {
			var r = document.createEvent("CustomEvent");
			r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
		}
		var E_ = window.jQuery,
			gn = {},
			au = ".w-ix",
			b_ = {
				reset: function(e, t) {
					Vi.triggers.reset(e, t)
				},
				intro: function(e, t) {
					Vi.triggers.intro(e, t), ou(t, "COMPONENT_ACTIVE")
				},
				outro: function(e, t) {
					Vi.triggers.outro(e, t), ou(t, "COMPONENT_INACTIVE")
				}
			};
		gn.triggers = {};
		gn.types = {
			INTRO: "w-ix-intro" + au,
			OUTRO: "w-ix-outro" + au
		};
		E_.extend(gn.triggers, b_);
		su.exports = gn
	});
	var uu = l((uH, pt) => {
		function Hi(e) {
			return pt.exports = Hi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
				return typeof t
			} : function(t) {
				return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			}, pt.exports.__esModule = !0, pt.exports.default = pt.exports, Hi(e)
		}
		pt.exports = Hi, pt.exports.__esModule = !0, pt.exports.default = pt.exports
	});
	var hn = l((cH, Tr) => {
		var __ = uu().default;

		function cu(e) {
			if (typeof WeakMap != "function") return null;
			var t = new WeakMap,
				r = new WeakMap;
			return (cu = function(i) {
				return i ? r : t
			})(e)
		}

		function I_(e, t) {
			if (!t && e && e.__esModule) return e;
			if (e === null || __(e) != "object" && typeof e != "function") return {
				default: e
			};
			var r = cu(t);
			if (r && r.has(e)) return r.get(e);
			var n = {
					__proto__: null
				},
				i = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var o in e)
				if (o !== "default" && {}.hasOwnProperty.call(e, o)) {
					var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
					a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
				}
			return n.default = e, r && r.set(e, n), n
		}
		Tr.exports = I_, Tr.exports.__esModule = !0, Tr.exports.default = Tr.exports
	});
	var lu = l((lH, wr) => {
		function T_(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		wr.exports = T_, wr.exports.__esModule = !0, wr.exports.default = wr.exports
	});
	var ye = l((fH, fu) => {
		var mn = function(e) {
			return e && e.Math == Math && e
		};
		fu.exports = mn(typeof globalThis == "object" && globalThis) || mn(typeof window == "object" && window) || mn(typeof self == "object" && self) || mn(typeof global == "object" && global) || function() {
			return this
		}() || Function("return this")()
	});
	var jt = l((dH, du) => {
		du.exports = function(e) {
			try {
				return !!e()
			} catch {
				return !0
			}
		}
	});
	var Nt = l((pH, pu) => {
		var w_ = jt();
		pu.exports = !w_(function() {
			return Object.defineProperty({}, 1, {
				get: function() {
					return 7
				}
			})[1] != 7
		})
	});
	var yn = l((vH, vu) => {
		var xr = Function.prototype.call;
		vu.exports = xr.bind ? xr.bind(xr) : function() {
			return xr.apply(xr, arguments)
		}
	});
	var yu = l(mu => {
		"use strict";
		var gu = {}.propertyIsEnumerable,
			hu = Object.getOwnPropertyDescriptor,
			x_ = hu && !gu.call({
				1: 2
			}, 1);
		mu.f = x_ ? function(t) {
			var r = hu(this, t);
			return !!r && r.enumerable
		} : gu
	});
	var Wi = l((hH, Eu) => {
		Eu.exports = function(e, t) {
			return {
				enumerable: !(e & 1),
				configurable: !(e & 2),
				writable: !(e & 4),
				value: t
			}
		}
	});
	var Ye = l((mH, _u) => {
		var bu = Function.prototype,
			Bi = bu.bind,
			Xi = bu.call,
			O_ = Bi && Bi.bind(Xi);
		_u.exports = Bi ? function(e) {
			return e && O_(Xi, e)
		} : function(e) {
			return e && function() {
				return Xi.apply(e, arguments)
			}
		}
	});
	var wu = l((yH, Tu) => {
		var Iu = Ye(),
			A_ = Iu({}.toString),
			S_ = Iu("".slice);
		Tu.exports = function(e) {
			return S_(A_(e), 8, -1)
		}
	});
	var Ou = l((EH, xu) => {
		var C_ = ye(),
			R_ = Ye(),
			L_ = jt(),
			N_ = wu(),
			ji = C_.Object,
			P_ = R_("".split);
		xu.exports = L_(function() {
			return !ji("z").propertyIsEnumerable(0)
		}) ? function(e) {
			return N_(e) == "String" ? P_(e, "") : ji(e)
		} : ji
	});
	var zi = l((bH, Au) => {
		var q_ = ye(),
			M_ = q_.TypeError;
		Au.exports = function(e) {
			if (e == null) throw M_("Can't call method on " + e);
			return e
		}
	});
	var Or = l((_H, Su) => {
		var F_ = Ou(),
			D_ = zi();
		Su.exports = function(e) {
			return F_(D_(e))
		}
	});
	var at = l((IH, Cu) => {
		Cu.exports = function(e) {
			return typeof e == "function"
		}
	});
	var zt = l((TH, Ru) => {
		var k_ = at();
		Ru.exports = function(e) {
			return typeof e == "object" ? e !== null : k_(e)
		}
	});
	var Ar = l((wH, Lu) => {
		var Ki = ye(),
			G_ = at(),
			U_ = function(e) {
				return G_(e) ? e : void 0
			};
		Lu.exports = function(e, t) {
			return arguments.length < 2 ? U_(Ki[e]) : Ki[e] && Ki[e][t]
		}
	});
	var Pu = l((xH, Nu) => {
		var V_ = Ye();
		Nu.exports = V_({}.isPrototypeOf)
	});
	var Mu = l((OH, qu) => {
		var H_ = Ar();
		qu.exports = H_("navigator", "userAgent") || ""
	});
	var Hu = l((AH, Vu) => {
		var Uu = ye(),
			Yi = Mu(),
			Fu = Uu.process,
			Du = Uu.Deno,
			ku = Fu && Fu.versions || Du && Du.version,
			Gu = ku && ku.v8,
			Qe, En;
		Gu && (Qe = Gu.split("."), En = Qe[0] > 0 && Qe[0] < 4 ? 1 : +(Qe[0] + Qe[1]));
		!En && Yi && (Qe = Yi.match(/Edge\/(\d+)/), (!Qe || Qe[1] >= 74) && (Qe = Yi.match(/Chrome\/(\d+)/), Qe && (En = +Qe[1])));
		Vu.exports = En
	});
	var Qi = l((SH, Bu) => {
		var Wu = Hu(),
			W_ = jt();
		Bu.exports = !!Object.getOwnPropertySymbols && !W_(function() {
			var e = Symbol();
			return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Wu && Wu < 41
		})
	});
	var $i = l((CH, Xu) => {
		var B_ = Qi();
		Xu.exports = B_ && !Symbol.sham && typeof Symbol.iterator == "symbol"
	});
	var Zi = l((RH, ju) => {
		var X_ = ye(),
			j_ = Ar(),
			z_ = at(),
			K_ = Pu(),
			Y_ = $i(),
			Q_ = X_.Object;
		ju.exports = Y_ ? function(e) {
			return typeof e == "symbol"
		} : function(e) {
			var t = j_("Symbol");
			return z_(t) && K_(t.prototype, Q_(e))
		}
	});
	var Ku = l((LH, zu) => {
		var $_ = ye(),
			Z_ = $_.String;
		zu.exports = function(e) {
			try {
				return Z_(e)
			} catch {
				return "Object"
			}
		}
	});
	var Qu = l((NH, Yu) => {
		var J_ = ye(),
			eI = at(),
			tI = Ku(),
			rI = J_.TypeError;
		Yu.exports = function(e) {
			if (eI(e)) return e;
			throw rI(tI(e) + " is not a function")
		}
	});
	var Zu = l((PH, $u) => {
		var nI = Qu();
		$u.exports = function(e, t) {
			var r = e[t];
			return r == null ? void 0 : nI(r)
		}
	});
	var ec = l((qH, Ju) => {
		var iI = ye(),
			Ji = yn(),
			eo = at(),
			to = zt(),
			oI = iI.TypeError;
		Ju.exports = function(e, t) {
			var r, n;
			if (t === "string" && eo(r = e.toString) && !to(n = Ji(r, e)) || eo(r = e.valueOf) && !to(n = Ji(r, e)) || t !== "string" && eo(r = e.toString) && !to(n = Ji(r, e))) return n;
			throw oI("Can't convert object to primitive value")
		}
	});
	var rc = l((MH, tc) => {
		tc.exports = !1
	});
	var bn = l((FH, ic) => {
		var nc = ye(),
			aI = Object.defineProperty;
		ic.exports = function(e, t) {
			try {
				aI(nc, e, {
					value: t,
					configurable: !0,
					writable: !0
				})
			} catch {
				nc[e] = t
			}
			return t
		}
	});
	var _n = l((DH, ac) => {
		var sI = ye(),
			uI = bn(),
			oc = "__core-js_shared__",
			cI = sI[oc] || uI(oc, {});
		ac.exports = cI
	});
	var ro = l((kH, uc) => {
		var lI = rc(),
			sc = _n();
		(uc.exports = function(e, t) {
			return sc[e] || (sc[e] = t !== void 0 ? t : {})
		})("versions", []).push({
			version: "3.19.0",
			mode: lI ? "pure" : "global",
			copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
		})
	});
	var lc = l((GH, cc) => {
		var fI = ye(),
			dI = zi(),
			pI = fI.Object;
		cc.exports = function(e) {
			return pI(dI(e))
		}
	});
	var _t = l((UH, fc) => {
		var vI = Ye(),
			gI = lc(),
			hI = vI({}.hasOwnProperty);
		fc.exports = Object.hasOwn || function(t, r) {
			return hI(gI(t), r)
		}
	});
	var no = l((VH, dc) => {
		var mI = Ye(),
			yI = 0,
			EI = Math.random(),
			bI = mI(1 .toString);
		dc.exports = function(e) {
			return "Symbol(" + (e === void 0 ? "" : e) + ")_" + bI(++yI + EI, 36)
		}
	});
	var io = l((HH, mc) => {
		var _I = ye(),
			II = ro(),
			pc = _t(),
			TI = no(),
			vc = Qi(),
			hc = $i(),
			Kt = II("wks"),
			Pt = _I.Symbol,
			gc = Pt && Pt.for,
			wI = hc ? Pt : Pt && Pt.withoutSetter || TI;
		mc.exports = function(e) {
			if (!pc(Kt, e) || !(vc || typeof Kt[e] == "string")) {
				var t = "Symbol." + e;
				vc && pc(Pt, e) ? Kt[e] = Pt[e] : hc && gc ? Kt[e] = gc(t) : Kt[e] = wI(t)
			}
			return Kt[e]
		}
	});
	var _c = l((WH, bc) => {
		var xI = ye(),
			OI = yn(),
			yc = zt(),
			Ec = Zi(),
			AI = Zu(),
			SI = ec(),
			CI = io(),
			RI = xI.TypeError,
			LI = CI("toPrimitive");
		bc.exports = function(e, t) {
			if (!yc(e) || Ec(e)) return e;
			var r = AI(e, LI),
				n;
			if (r) {
				if (t === void 0 && (t = "default"), n = OI(r, e, t), !yc(n) || Ec(n)) return n;
				throw RI("Can't convert object to primitive value")
			}
			return t === void 0 && (t = "number"), SI(e, t)
		}
	});
	var oo = l((BH, Ic) => {
		var NI = _c(),
			PI = Zi();
		Ic.exports = function(e) {
			var t = NI(e, "string");
			return PI(t) ? t : t + ""
		}
	});
	var so = l((XH, wc) => {
		var qI = ye(),
			Tc = zt(),
			ao = qI.document,
			MI = Tc(ao) && Tc(ao.createElement);
		wc.exports = function(e) {
			return MI ? ao.createElement(e) : {}
		}
	});
	var uo = l((jH, xc) => {
		var FI = Nt(),
			DI = jt(),
			kI = so();
		xc.exports = !FI && !DI(function() {
			return Object.defineProperty(kI("div"), "a", {
				get: function() {
					return 7
				}
			}).a != 7
		})
	});
	var co = l(Ac => {
		var GI = Nt(),
			UI = yn(),
			VI = yu(),
			HI = Wi(),
			WI = Or(),
			BI = oo(),
			XI = _t(),
			jI = uo(),
			Oc = Object.getOwnPropertyDescriptor;
		Ac.f = GI ? Oc : function(t, r) {
			if (t = WI(t), r = BI(r), jI) try {
				return Oc(t, r)
			} catch {}
			if (XI(t, r)) return HI(!UI(VI.f, t, r), t[r])
		}
	});
	var Sr = l((KH, Cc) => {
		var Sc = ye(),
			zI = zt(),
			KI = Sc.String,
			YI = Sc.TypeError;
		Cc.exports = function(e) {
			if (zI(e)) return e;
			throw YI(KI(e) + " is not an object")
		}
	});
	var Cr = l(Nc => {
		var QI = ye(),
			$I = Nt(),
			ZI = uo(),
			Rc = Sr(),
			JI = oo(),
			eT = QI.TypeError,
			Lc = Object.defineProperty;
		Nc.f = $I ? Lc : function(t, r, n) {
			if (Rc(t), r = JI(r), Rc(n), ZI) try {
				return Lc(t, r, n)
			} catch {}
			if ("get" in n || "set" in n) throw eT("Accessors not supported");
			return "value" in n && (t[r] = n.value), t
		}
	});
	var In = l((QH, Pc) => {
		var tT = Nt(),
			rT = Cr(),
			nT = Wi();
		Pc.exports = tT ? function(e, t, r) {
			return rT.f(e, t, nT(1, r))
		} : function(e, t, r) {
			return e[t] = r, e
		}
	});
	var fo = l(($H, qc) => {
		var iT = Ye(),
			oT = at(),
			lo = _n(),
			aT = iT(Function.toString);
		oT(lo.inspectSource) || (lo.inspectSource = function(e) {
			return aT(e)
		});
		qc.exports = lo.inspectSource
	});
	var Dc = l((ZH, Fc) => {
		var sT = ye(),
			uT = at(),
			cT = fo(),
			Mc = sT.WeakMap;
		Fc.exports = uT(Mc) && /native code/.test(cT(Mc))
	});
	var po = l((JH, Gc) => {
		var lT = ro(),
			fT = no(),
			kc = lT("keys");
		Gc.exports = function(e) {
			return kc[e] || (kc[e] = fT(e))
		}
	});
	var Tn = l((eW, Uc) => {
		Uc.exports = {}
	});
	var jc = l((tW, Xc) => {
		var dT = Dc(),
			Bc = ye(),
			vo = Ye(),
			pT = zt(),
			vT = In(),
			go = _t(),
			ho = _n(),
			gT = po(),
			hT = Tn(),
			Vc = "Object already initialized",
			yo = Bc.TypeError,
			mT = Bc.WeakMap,
			wn, Rr, xn, yT = function(e) {
				return xn(e) ? Rr(e) : wn(e, {})
			},
			ET = function(e) {
				return function(t) {
					var r;
					if (!pT(t) || (r = Rr(t)).type !== e) throw yo("Incompatible receiver, " + e + " required");
					return r
				}
			};
		dT || ho.state ? (It = ho.state || (ho.state = new mT), Hc = vo(It.get), mo = vo(It.has), Wc = vo(It.set), wn = function(e, t) {
			if (mo(It, e)) throw new yo(Vc);
			return t.facade = e, Wc(It, e, t), t
		}, Rr = function(e) {
			return Hc(It, e) || {}
		}, xn = function(e) {
			return mo(It, e)
		}) : (qt = gT("state"), hT[qt] = !0, wn = function(e, t) {
			if (go(e, qt)) throw new yo(Vc);
			return t.facade = e, vT(e, qt, t), t
		}, Rr = function(e) {
			return go(e, qt) ? e[qt] : {}
		}, xn = function(e) {
			return go(e, qt)
		});
		var It, Hc, mo, Wc, qt;
		Xc.exports = {
			set: wn,
			get: Rr,
			has: xn,
			enforce: yT,
			getterFor: ET
		}
	});
	var Yc = l((rW, Kc) => {
		var Eo = Nt(),
			bT = _t(),
			zc = Function.prototype,
			_T = Eo && Object.getOwnPropertyDescriptor,
			bo = bT(zc, "name"),
			IT = bo && function() {}.name === "something",
			TT = bo && (!Eo || Eo && _T(zc, "name").configurable);
		Kc.exports = {
			EXISTS: bo,
			PROPER: IT,
			CONFIGURABLE: TT
		}
	});
	var el = l((nW, Jc) => {
		var wT = ye(),
			Qc = at(),
			xT = _t(),
			$c = In(),
			OT = bn(),
			AT = fo(),
			Zc = jc(),
			ST = Yc().CONFIGURABLE,
			CT = Zc.get,
			RT = Zc.enforce,
			LT = String(String).split("String");
		(Jc.exports = function(e, t, r, n) {
			var i = n ? !!n.unsafe : !1,
				o = n ? !!n.enumerable : !1,
				a = n ? !!n.noTargetGet : !1,
				s = n && n.name !== void 0 ? n.name : t,
				u;
			if (Qc(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!xT(r, "name") || ST && r.name !== s) && $c(r, "name", s), u = RT(r), u.source || (u.source = LT.join(typeof s == "string" ? s : ""))), e === wT) {
				o ? e[t] = r : OT(t, r);
				return
			} else i ? !a && e[t] && (o = !0) : delete e[t];
			o ? e[t] = r : $c(e, t, r)
		})(Function.prototype, "toString", function() {
			return Qc(this) && CT(this).source || AT(this)
		})
	});
	var _o = l((iW, tl) => {
		var NT = Math.ceil,
			PT = Math.floor;
		tl.exports = function(e) {
			var t = +e;
			return t !== t || t === 0 ? 0 : (t > 0 ? PT : NT)(t)
		}
	});
	var nl = l((oW, rl) => {
		var qT = _o(),
			MT = Math.max,
			FT = Math.min;
		rl.exports = function(e, t) {
			var r = qT(e);
			return r < 0 ? MT(r + t, 0) : FT(r, t)
		}
	});
	var ol = l((aW, il) => {
		var DT = _o(),
			kT = Math.min;
		il.exports = function(e) {
			return e > 0 ? kT(DT(e), 9007199254740991) : 0
		}
	});
	var sl = l((sW, al) => {
		var GT = ol();
		al.exports = function(e) {
			return GT(e.length)
		}
	});
	var Io = l((uW, cl) => {
		var UT = Or(),
			VT = nl(),
			HT = sl(),
			ul = function(e) {
				return function(t, r, n) {
					var i = UT(t),
						o = HT(i),
						a = VT(n, o),
						s;
					if (e && r != r) {
						for (; o > a;)
							if (s = i[a++], s != s) return !0
					} else
						for (; o > a; a++)
							if ((e || a in i) && i[a] === r) return e || a || 0;
					return !e && -1
				}
			};
		cl.exports = {
			includes: ul(!0),
			indexOf: ul(!1)
		}
	});
	var wo = l((cW, fl) => {
		var WT = Ye(),
			To = _t(),
			BT = Or(),
			XT = Io().indexOf,
			jT = Tn(),
			ll = WT([].push);
		fl.exports = function(e, t) {
			var r = BT(e),
				n = 0,
				i = [],
				o;
			for (o in r) !To(jT, o) && To(r, o) && ll(i, o);
			for (; t.length > n;) To(r, o = t[n++]) && (~XT(i, o) || ll(i, o));
			return i
		}
	});
	var On = l((lW, dl) => {
		dl.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
	});
	var vl = l(pl => {
		var zT = wo(),
			KT = On(),
			YT = KT.concat("length", "prototype");
		pl.f = Object.getOwnPropertyNames || function(t) {
			return zT(t, YT)
		}
	});
	var hl = l(gl => {
		gl.f = Object.getOwnPropertySymbols
	});
	var yl = l((pW, ml) => {
		var QT = Ar(),
			$T = Ye(),
			ZT = vl(),
			JT = hl(),
			ew = Sr(),
			tw = $T([].concat);
		ml.exports = QT("Reflect", "ownKeys") || function(t) {
			var r = ZT.f(ew(t)),
				n = JT.f;
			return n ? tw(r, n(t)) : r
		}
	});
	var bl = l((vW, El) => {
		var rw = _t(),
			nw = yl(),
			iw = co(),
			ow = Cr();
		El.exports = function(e, t) {
			for (var r = nw(t), n = ow.f, i = iw.f, o = 0; o < r.length; o++) {
				var a = r[o];
				rw(e, a) || n(e, a, i(t, a))
			}
		}
	});
	var Il = l((gW, _l) => {
		var aw = jt(),
			sw = at(),
			uw = /#|\.prototype\./,
			Lr = function(e, t) {
				var r = lw[cw(e)];
				return r == dw ? !0 : r == fw ? !1 : sw(t) ? aw(t) : !!t
			},
			cw = Lr.normalize = function(e) {
				return String(e).replace(uw, ".").toLowerCase()
			},
			lw = Lr.data = {},
			fw = Lr.NATIVE = "N",
			dw = Lr.POLYFILL = "P";
		_l.exports = Lr
	});
	var wl = l((hW, Tl) => {
		var xo = ye(),
			pw = co().f,
			vw = In(),
			gw = el(),
			hw = bn(),
			mw = bl(),
			yw = Il();
		Tl.exports = function(e, t) {
			var r = e.target,
				n = e.global,
				i = e.stat,
				o, a, s, u, f, I;
			if (n ? a = xo : i ? a = xo[r] || hw(r, {}) : a = (xo[r] || {}).prototype, a)
				for (s in t) {
					if (f = t[s], e.noTargetGet ? (I = pw(a, s), u = I && I.value) : u = a[s], o = yw(n ? s : r + (i ? "." : "#") + s, e.forced), !o && u !== void 0) {
						if (typeof f == typeof u) continue;
						mw(f, u)
					}(e.sham || u && u.sham) && vw(f, "sham", !0), gw(a, s, f, e)
				}
		}
	});
	var Ol = l((mW, xl) => {
		var Ew = wo(),
			bw = On();
		xl.exports = Object.keys || function(t) {
			return Ew(t, bw)
		}
	});
	var Sl = l((yW, Al) => {
		var _w = Nt(),
			Iw = Cr(),
			Tw = Sr(),
			ww = Or(),
			xw = Ol();
		Al.exports = _w ? Object.defineProperties : function(t, r) {
			Tw(t);
			for (var n = ww(r), i = xw(r), o = i.length, a = 0, s; o > a;) Iw.f(t, s = i[a++], n[s]);
			return t
		}
	});
	var Rl = l((EW, Cl) => {
		var Ow = Ar();
		Cl.exports = Ow("document", "documentElement")
	});
	var kl = l((bW, Dl) => {
		var Aw = Sr(),
			Sw = Sl(),
			Ll = On(),
			Cw = Tn(),
			Rw = Rl(),
			Lw = so(),
			Nw = po(),
			Nl = ">",
			Pl = "<",
			Ao = "prototype",
			So = "script",
			Ml = Nw("IE_PROTO"),
			Oo = function() {},
			Fl = function(e) {
				return Pl + So + Nl + e + Pl + "/" + So + Nl
			},
			ql = function(e) {
				e.write(Fl("")), e.close();
				var t = e.parentWindow.Object;
				return e = null, t
			},
			Pw = function() {
				var e = Lw("iframe"),
					t = "java" + So + ":",
					r;
				return e.style.display = "none", Rw.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(Fl("document.F=Object")), r.close(), r.F
			},
			An, Sn = function() {
				try {
					An = new ActiveXObject("htmlfile")
				} catch {}
				Sn = typeof document < "u" ? document.domain && An ? ql(An) : Pw() : ql(An);
				for (var e = Ll.length; e--;) delete Sn[Ao][Ll[e]];
				return Sn()
			};
		Cw[Ml] = !0;
		Dl.exports = Object.create || function(t, r) {
			var n;
			return t !== null ? (Oo[Ao] = Aw(t), n = new Oo, Oo[Ao] = null, n[Ml] = t) : n = Sn(), r === void 0 ? n : Sw(n, r)
		}
	});
	var Ul = l((_W, Gl) => {
		var qw = io(),
			Mw = kl(),
			Fw = Cr(),
			Co = qw("unscopables"),
			Ro = Array.prototype;
		Ro[Co] == null && Fw.f(Ro, Co, {
			configurable: !0,
			value: Mw(null)
		});
		Gl.exports = function(e) {
			Ro[Co][e] = !0
		}
	});
	var Vl = l(() => {
		"use strict";
		var Dw = wl(),
			kw = Io().includes,
			Gw = Ul();
		Dw({
			target: "Array",
			proto: !0
		}, {
			includes: function(t) {
				return kw(this, t, arguments.length > 1 ? arguments[1] : void 0)
			}
		});
		Gw("includes")
	});
	var Wl = l((wW, Hl) => {
		var Uw = ye(),
			Vw = Ye();
		Hl.exports = function(e, t) {
			return Vw(Uw[e].prototype[t])
		}
	});
	var Xl = l((xW, Bl) => {
		Vl();
		var Hw = Wl();
		Bl.exports = Hw("Array", "includes")
	});
	var zl = l((OW, jl) => {
		var Ww = Xl();
		jl.exports = Ww
	});
	var Yl = l((AW, Kl) => {
		var Bw = zl();
		Kl.exports = Bw
	});
	var Lo = l((SW, Ql) => {
		var Xw = typeof global == "object" && global && global.Object === Object && global;
		Ql.exports = Xw
	});
	var $e = l((CW, $l) => {
		var jw = Lo(),
			zw = typeof self == "object" && self && self.Object === Object && self,
			Kw = jw || zw || Function("return this")();
		$l.exports = Kw
	});
	var Yt = l((RW, Zl) => {
		var Yw = $e(),
			Qw = Yw.Symbol;
		Zl.exports = Qw
	});
	var rf = l((LW, tf) => {
		var Jl = Yt(),
			ef = Object.prototype,
			$w = ef.hasOwnProperty,
			Zw = ef.toString,
			Nr = Jl ? Jl.toStringTag : void 0;

		function Jw(e) {
			var t = $w.call(e, Nr),
				r = e[Nr];
			try {
				e[Nr] = void 0;
				var n = !0
			} catch {}
			var i = Zw.call(e);
			return n && (t ? e[Nr] = r : delete e[Nr]), i
		}
		tf.exports = Jw
	});
	var of = l((NW, nf) => {
		var e0 = Object.prototype,
			t0 = e0.toString;

		function r0(e) {
			return t0.call(e)
		}
		nf.exports = r0
	});
	var Tt = l((PW, uf) => {
		var af = Yt(),
			n0 = rf(),
			i0 = of (),
			o0 = "[object Null]",
			a0 = "[object Undefined]",
			sf = af ? af.toStringTag : void 0;

		function s0(e) {
			return e == null ? e === void 0 ? a0 : o0 : sf && sf in Object(e) ? n0(e) : i0(e)
		}
		uf.exports = s0
	});
	var No = l((qW, cf) => {
		function u0(e, t) {
			return function(r) {
				return e(t(r))
			}
		}
		cf.exports = u0
	});
	var Po = l((MW, lf) => {
		var c0 = No(),
			l0 = c0(Object.getPrototypeOf, Object);
		lf.exports = l0
	});
	var vt = l((FW, ff) => {
		function f0(e) {
			return e != null && typeof e == "object"
		}
		ff.exports = f0
	});
	var qo = l((DW, pf) => {
		var d0 = Tt(),
			p0 = Po(),
			v0 = vt(),
			g0 = "[object Object]",
			h0 = Function.prototype,
			m0 = Object.prototype,
			df = h0.toString,
			y0 = m0.hasOwnProperty,
			E0 = df.call(Object);

		function b0(e) {
			if (!v0(e) || d0(e) != g0) return !1;
			var t = p0(e);
			if (t === null) return !0;
			var r = y0.call(t, "constructor") && t.constructor;
			return typeof r == "function" && r instanceof r && df.call(r) == E0
		}
		pf.exports = b0
	});
	var vf = l(Mo => {
		"use strict";
		Object.defineProperty(Mo, "__esModule", {
			value: !0
		});
		Mo.default = _0;

		function _0(e) {
			var t, r = e.Symbol;
			return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
		}
	});
	var gf = l((Do, Fo) => {
		"use strict";
		Object.defineProperty(Do, "__esModule", {
			value: !0
		});
		var I0 = vf(),
			T0 = w0(I0);

		function w0(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var Qt;
		typeof self < "u" ? Qt = self : typeof window < "u" ? Qt = window : typeof global < "u" ? Qt = global : typeof Fo < "u" ? Qt = Fo : Qt = Function("return this")();
		var x0 = (0, T0.default)(Qt);
		Do.default = x0
	});
	var ko = l(Pr => {
		"use strict";
		Pr.__esModule = !0;
		Pr.ActionTypes = void 0;
		Pr.default = Ef;
		var O0 = qo(),
			A0 = yf(O0),
			S0 = gf(),
			hf = yf(S0);

		function yf(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var mf = Pr.ActionTypes = {
			INIT: "@@redux/INIT"
		};

		function Ef(e, t, r) {
			var n;
			if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
				if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
				return r(Ef)(e, t)
			}
			if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
			var i = e,
				o = t,
				a = [],
				s = a,
				u = !1;

			function f() {
				s === a && (s = a.slice())
			}

			function I() {
				return o
			}

			function p(T) {
				if (typeof T != "function") throw new Error("Expected listener to be a function.");
				var O = !0;
				return f(), s.push(T),
					function() {
						if (O) {
							O = !1, f();
							var M = s.indexOf(T);
							s.splice(M, 1)
						}
					}
			}

			function E(T) {
				if (!(0, A0.default)(T)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
				if (typeof T.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
				if (u) throw new Error("Reducers may not dispatch actions.");
				try {
					u = !0, o = i(o, T)
				} finally {
					u = !1
				}
				for (var O = a = s, x = 0; x < O.length; x++) O[x]();
				return T
			}

			function m(T) {
				if (typeof T != "function") throw new Error("Expected the nextReducer to be a function.");
				i = T, E({
					type: mf.INIT
				})
			}

			function b() {
				var T, O = p;
				return T = {
					subscribe: function(M) {
						if (typeof M != "object") throw new TypeError("Expected the observer to be an object.");

						function P() {
							M.next && M.next(I())
						}
						P();
						var V = O(P);
						return {
							unsubscribe: V
						}
					}
				}, T[hf.default] = function() {
					return this
				}, T
			}
			return E({
				type: mf.INIT
			}), n = {
				dispatch: E,
				subscribe: p,
				getState: I,
				replaceReducer: m
			}, n[hf.default] = b, n
		}
	});
	var Uo = l(Go => {
		"use strict";
		Go.__esModule = !0;
		Go.default = C0;

		function C0(e) {
			typeof console < "u" && typeof console.error == "function" && console.error(e);
			try {
				throw new Error(e)
			} catch {}
		}
	});
	var If = l(Vo => {
		"use strict";
		Vo.__esModule = !0;
		Vo.default = q0;
		var bf = ko(),
			R0 = qo(),
			VW = _f(R0),
			L0 = Uo(),
			HW = _f(L0);

		function _f(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function N0(e, t) {
			var r = t && t.type,
				n = r && '"' + r.toString() + '"' || "an action";
			return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
		}

		function P0(e) {
			Object.keys(e).forEach(function(t) {
				var r = e[t],
					n = r(void 0, {
						type: bf.ActionTypes.INIT
					});
				if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
				var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
				if (typeof r(void 0, {
						type: i
					}) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + bf.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
			})
		}

		function q0(e) {
			for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
				var i = t[n];
				typeof e[i] == "function" && (r[i] = e[i])
			}
			var o = Object.keys(r);
			if (!1) var a;
			var s;
			try {
				P0(r)
			} catch (u) {
				s = u
			}
			return function() {
				var f = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
					I = arguments[1];
				if (s) throw s;
				if (!1) var p;
				for (var E = !1, m = {}, b = 0; b < o.length; b++) {
					var T = o[b],
						O = r[T],
						x = f[T],
						M = O(x, I);
					if (typeof M > "u") {
						var P = N0(T, I);
						throw new Error(P)
					}
					m[T] = M, E = E || M !== x
				}
				return E ? m : f
			}
		}
	});
	var wf = l(Ho => {
		"use strict";
		Ho.__esModule = !0;
		Ho.default = M0;

		function Tf(e, t) {
			return function() {
				return t(e.apply(void 0, arguments))
			}
		}

		function M0(e, t) {
			if (typeof e == "function") return Tf(e, t);
			if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
			for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
				var o = r[i],
					a = e[o];
				typeof a == "function" && (n[o] = Tf(a, t))
			}
			return n
		}
	});
	var Bo = l(Wo => {
		"use strict";
		Wo.__esModule = !0;
		Wo.default = F0;

		function F0() {
			for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
			if (t.length === 0) return function(o) {
				return o
			};
			if (t.length === 1) return t[0];
			var n = t[t.length - 1],
				i = t.slice(0, -1);
			return function() {
				return i.reduceRight(function(o, a) {
					return a(o)
				}, n.apply(void 0, arguments))
			}
		}
	});
	var xf = l(Xo => {
		"use strict";
		Xo.__esModule = !0;
		var D0 = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var r = arguments[t];
				for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
			}
			return e
		};
		Xo.default = V0;
		var k0 = Bo(),
			G0 = U0(k0);

		function U0(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function V0() {
			for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
			return function(n) {
				return function(i, o, a) {
					var s = n(i, o, a),
						u = s.dispatch,
						f = [],
						I = {
							getState: s.getState,
							dispatch: function(E) {
								return u(E)
							}
						};
					return f = t.map(function(p) {
						return p(I)
					}), u = G0.default.apply(void 0, f)(s.dispatch), D0({}, s, {
						dispatch: u
					})
				}
			}
		}
	});
	var jo = l(Be => {
		"use strict";
		Be.__esModule = !0;
		Be.compose = Be.applyMiddleware = Be.bindActionCreators = Be.combineReducers = Be.createStore = void 0;
		var H0 = ko(),
			W0 = $t(H0),
			B0 = If(),
			X0 = $t(B0),
			j0 = wf(),
			z0 = $t(j0),
			K0 = xf(),
			Y0 = $t(K0),
			Q0 = Bo(),
			$0 = $t(Q0),
			Z0 = Uo(),
			zW = $t(Z0);

		function $t(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Be.createStore = W0.default;
		Be.combineReducers = X0.default;
		Be.bindActionCreators = z0.default;
		Be.applyMiddleware = Y0.default;
		Be.compose = $0.default
	});
	var Ze, zo, st, J0, ex, Cn, tx, Ko = me(() => {
		"use strict";
		Ze = {
			NAVBAR_OPEN: "NAVBAR_OPEN",
			NAVBAR_CLOSE: "NAVBAR_CLOSE",
			TAB_ACTIVE: "TAB_ACTIVE",
			TAB_INACTIVE: "TAB_INACTIVE",
			SLIDER_ACTIVE: "SLIDER_ACTIVE",
			SLIDER_INACTIVE: "SLIDER_INACTIVE",
			DROPDOWN_OPEN: "DROPDOWN_OPEN",
			DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
			MOUSE_CLICK: "MOUSE_CLICK",
			MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
			MOUSE_DOWN: "MOUSE_DOWN",
			MOUSE_UP: "MOUSE_UP",
			MOUSE_OVER: "MOUSE_OVER",
			MOUSE_OUT: "MOUSE_OUT",
			MOUSE_MOVE: "MOUSE_MOVE",
			MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
			SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
			SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
			SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
			ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
			ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
			PAGE_START: "PAGE_START",
			PAGE_FINISH: "PAGE_FINISH",
			PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
			PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
			PAGE_SCROLL: "PAGE_SCROLL"
		}, zo = {
			ELEMENT: "ELEMENT",
			CLASS: "CLASS",
			PAGE: "PAGE"
		}, st = {
			ELEMENT: "ELEMENT",
			VIEWPORT: "VIEWPORT"
		}, J0 = {
			X_AXIS: "X_AXIS",
			Y_AXIS: "Y_AXIS"
		}, ex = {
			CHILDREN: "CHILDREN",
			SIBLINGS: "SIBLINGS",
			IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
		}, Cn = {
			FADE_EFFECT: "FADE_EFFECT",
			SLIDE_EFFECT: "SLIDE_EFFECT",
			GROW_EFFECT: "GROW_EFFECT",
			SHRINK_EFFECT: "SHRINK_EFFECT",
			SPIN_EFFECT: "SPIN_EFFECT",
			FLY_EFFECT: "FLY_EFFECT",
			POP_EFFECT: "POP_EFFECT",
			FLIP_EFFECT: "FLIP_EFFECT",
			JIGGLE_EFFECT: "JIGGLE_EFFECT",
			PULSE_EFFECT: "PULSE_EFFECT",
			DROP_EFFECT: "DROP_EFFECT",
			BLINK_EFFECT: "BLINK_EFFECT",
			BOUNCE_EFFECT: "BOUNCE_EFFECT",
			FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
			FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
			RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
			JELLO_EFFECT: "JELLO_EFFECT",
			GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
			SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
			PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
		}, tx = {
			LEFT: "LEFT",
			RIGHT: "RIGHT",
			BOTTOM: "BOTTOM",
			TOP: "TOP",
			BOTTOM_LEFT: "BOTTOM_LEFT",
			BOTTOM_RIGHT: "BOTTOM_RIGHT",
			TOP_RIGHT: "TOP_RIGHT",
			TOP_LEFT: "TOP_LEFT",
			CLOCKWISE: "CLOCKWISE",
			COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
		}
	});
	var Ue, rx, Rn = me(() => {
		"use strict";
		Ue = {
			TRANSFORM_MOVE: "TRANSFORM_MOVE",
			TRANSFORM_SCALE: "TRANSFORM_SCALE",
			TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
			TRANSFORM_SKEW: "TRANSFORM_SKEW",
			STYLE_OPACITY: "STYLE_OPACITY",
			STYLE_SIZE: "STYLE_SIZE",
			STYLE_FILTER: "STYLE_FILTER",
			STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
			STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
			STYLE_BORDER: "STYLE_BORDER",
			STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
			OBJECT_VALUE: "OBJECT_VALUE",
			PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
			PLUGIN_SPLINE: "PLUGIN_SPLINE",
			PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
			GENERAL_DISPLAY: "GENERAL_DISPLAY",
			GENERAL_START_ACTION: "GENERAL_START_ACTION",
			GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
			GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
			GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
			GENERAL_LOOP: "GENERAL_LOOP",
			STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
		}, rx = {
			ELEMENT: "ELEMENT",
			ELEMENT_CLASS: "ELEMENT_CLASS",
			TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
		}
	});
	var nx, Of = me(() => {
		"use strict";
		nx = {
			MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
			MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
			MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
			SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
			SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
			MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
			PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
			PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
			PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
			NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
			DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
			ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
			TAB_INTERACTION: "TAB_INTERACTION",
			SLIDER_INTERACTION: "SLIDER_INTERACTION"
		}
	});
	var ix, ox, ax, sx, ux, cx, lx, Yo, Af = me(() => {
		"use strict";
		Rn();
		({
			TRANSFORM_MOVE: ix,
			TRANSFORM_SCALE: ox,
			TRANSFORM_ROTATE: ax,
			TRANSFORM_SKEW: sx,
			STYLE_SIZE: ux,
			STYLE_FILTER: cx,
			STYLE_FONT_VARIATION: lx
		} = Ue), Yo = {
			[ix]: !0,
			[ox]: !0,
			[ax]: !0,
			[sx]: !0,
			[ux]: !0,
			[cx]: !0,
			[lx]: !0
		}
	});
	var we = {};
	Ge(we, {
		IX2_ACTION_LIST_PLAYBACK_CHANGED: () => Ax,
		IX2_ANIMATION_FRAME_CHANGED: () => _x,
		IX2_CLEAR_REQUESTED: () => yx,
		IX2_ELEMENT_STATE_CHANGED: () => Ox,
		IX2_EVENT_LISTENER_ADDED: () => Ex,
		IX2_EVENT_STATE_CHANGED: () => bx,
		IX2_INSTANCE_ADDED: () => Tx,
		IX2_INSTANCE_REMOVED: () => xx,
		IX2_INSTANCE_STARTED: () => wx,
		IX2_MEDIA_QUERIES_DEFINED: () => Cx,
		IX2_PARAMETER_CHANGED: () => Ix,
		IX2_PLAYBACK_REQUESTED: () => hx,
		IX2_PREVIEW_REQUESTED: () => gx,
		IX2_RAW_DATA_IMPORTED: () => fx,
		IX2_SESSION_INITIALIZED: () => dx,
		IX2_SESSION_STARTED: () => px,
		IX2_SESSION_STOPPED: () => vx,
		IX2_STOP_REQUESTED: () => mx,
		IX2_TEST_FRAME_RENDERED: () => Rx,
		IX2_VIEWPORT_WIDTH_CHANGED: () => Sx
	});
	var fx, dx, px, vx, gx, hx, mx, yx, Ex, bx, _x, Ix, Tx, wx, xx, Ox, Ax, Sx, Cx, Rx, Sf = me(() => {
		"use strict";
		fx = "IX2_RAW_DATA_IMPORTED", dx = "IX2_SESSION_INITIALIZED", px = "IX2_SESSION_STARTED", vx = "IX2_SESSION_STOPPED", gx = "IX2_PREVIEW_REQUESTED", hx = "IX2_PLAYBACK_REQUESTED", mx = "IX2_STOP_REQUESTED", yx = "IX2_CLEAR_REQUESTED", Ex = "IX2_EVENT_LISTENER_ADDED", bx = "IX2_EVENT_STATE_CHANGED", _x = "IX2_ANIMATION_FRAME_CHANGED", Ix = "IX2_PARAMETER_CHANGED", Tx = "IX2_INSTANCE_ADDED", wx = "IX2_INSTANCE_STARTED", xx = "IX2_INSTANCE_REMOVED", Ox = "IX2_ELEMENT_STATE_CHANGED", Ax = "IX2_ACTION_LIST_PLAYBACK_CHANGED", Sx = "IX2_VIEWPORT_WIDTH_CHANGED", Cx = "IX2_MEDIA_QUERIES_DEFINED", Rx = "IX2_TEST_FRAME_RENDERED"
	});
	var Le = {};
	Ge(Le, {
		ABSTRACT_NODE: () => SO,
		AUTO: () => mO,
		BACKGROUND: () => fO,
		BACKGROUND_COLOR: () => lO,
		BAR_DELIMITER: () => bO,
		BORDER_COLOR: () => dO,
		BOUNDARY_SELECTOR: () => Mx,
		CHILDREN: () => _O,
		COLON_DELIMITER: () => EO,
		COLOR: () => pO,
		COMMA_DELIMITER: () => yO,
		CONFIG_UNIT: () => Wx,
		CONFIG_VALUE: () => Gx,
		CONFIG_X_UNIT: () => Ux,
		CONFIG_X_VALUE: () => Fx,
		CONFIG_Y_UNIT: () => Vx,
		CONFIG_Y_VALUE: () => Dx,
		CONFIG_Z_UNIT: () => Hx,
		CONFIG_Z_VALUE: () => kx,
		DISPLAY: () => vO,
		FILTER: () => aO,
		FLEX: () => gO,
		FONT_VARIATION_SETTINGS: () => sO,
		HEIGHT: () => cO,
		HTML_ELEMENT: () => OO,
		IMMEDIATE_CHILDREN: () => IO,
		IX2_ID_DELIMITER: () => Lx,
		OPACITY: () => oO,
		PARENT: () => wO,
		PLAIN_OBJECT: () => AO,
		PRESERVE_3D: () => xO,
		RENDER_GENERAL: () => RO,
		RENDER_PLUGIN: () => NO,
		RENDER_STYLE: () => LO,
		RENDER_TRANSFORM: () => CO,
		ROTATE_X: () => Jx,
		ROTATE_Y: () => eO,
		ROTATE_Z: () => tO,
		SCALE_3D: () => Zx,
		SCALE_X: () => Yx,
		SCALE_Y: () => Qx,
		SCALE_Z: () => $x,
		SIBLINGS: () => TO,
		SKEW: () => rO,
		SKEW_X: () => nO,
		SKEW_Y: () => iO,
		TRANSFORM: () => Bx,
		TRANSLATE_3D: () => Kx,
		TRANSLATE_X: () => Xx,
		TRANSLATE_Y: () => jx,
		TRANSLATE_Z: () => zx,
		WF_PAGE: () => Nx,
		WIDTH: () => uO,
		WILL_CHANGE: () => hO,
		W_MOD_IX: () => qx,
		W_MOD_JS: () => Px
	});
	var Lx, Nx, Px, qx, Mx, Fx, Dx, kx, Gx, Ux, Vx, Hx, Wx, Bx, Xx, jx, zx, Kx, Yx, Qx, $x, Zx, Jx, eO, tO, rO, nO, iO, oO, aO, sO, uO, cO, lO, fO, dO, pO, vO, gO, hO, mO, yO, EO, bO, _O, IO, TO, wO, xO, OO, AO, SO, CO, RO, LO, NO, Cf = me(() => {
		"use strict";
		Lx = "|", Nx = "data-wf-page", Px = "w-mod-js", qx = "w-mod-ix", Mx = ".w-dyn-item", Fx = "xValue", Dx = "yValue", kx = "zValue", Gx = "value", Ux = "xUnit", Vx = "yUnit", Hx = "zUnit", Wx = "unit", Bx = "transform", Xx = "translateX", jx = "translateY", zx = "translateZ", Kx = "translate3d", Yx = "scaleX", Qx = "scaleY", $x = "scaleZ", Zx = "scale3d", Jx = "rotateX", eO = "rotateY", tO = "rotateZ", rO = "skew", nO = "skewX", iO = "skewY", oO = "opacity", aO = "filter", sO = "font-variation-settings", uO = "width", cO = "height", lO = "backgroundColor", fO = "background", dO = "borderColor", pO = "color", vO = "display", gO = "flex", hO = "willChange", mO = "AUTO", yO = ",", EO = ":", bO = "|", _O = "CHILDREN", IO = "IMMEDIATE_CHILDREN", TO = "SIBLINGS", wO = "PARENT", xO = "preserve-3d", OO = "HTML_ELEMENT", AO = "PLAIN_OBJECT", SO = "ABSTRACT_NODE", CO = "RENDER_TRANSFORM", RO = "RENDER_GENERAL", LO = "RENDER_STYLE", NO = "RENDER_PLUGIN"
	});
	var Rf = {};
	Ge(Rf, {
		ActionAppliesTo: () => rx,
		ActionTypeConsts: () => Ue,
		EventAppliesTo: () => zo,
		EventBasedOn: () => st,
		EventContinuousMouseAxes: () => J0,
		EventLimitAffectedElements: () => ex,
		EventTypeConsts: () => Ze,
		IX2EngineActionTypes: () => we,
		IX2EngineConstants: () => Le,
		InteractionTypeConsts: () => nx,
		QuickEffectDirectionConsts: () => tx,
		QuickEffectIds: () => Cn,
		ReducedMotionTypes: () => Yo
	});
	var Ve = me(() => {
		"use strict";
		Ko();
		Rn();
		Of();
		Af();
		Sf();
		Cf();
		Rn();
		Ko()
	});
	var PO, Lf, Nf = me(() => {
		"use strict";
		Ve();
		({
			IX2_RAW_DATA_IMPORTED: PO
		} = we), Lf = (e = Object.freeze({}), t) => {
			switch (t.type) {
				case PO:
					return t.payload.ixData || Object.freeze({});
				default:
					return e
			}
		}
	});
	var Zt = l(be => {
		"use strict";
		Object.defineProperty(be, "__esModule", {
			value: !0
		});
		var qO = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
			return typeof e
		} : function(e) {
			return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		};
		be.clone = Nn;
		be.addLast = Mf;
		be.addFirst = Ff;
		be.removeLast = Df;
		be.removeFirst = kf;
		be.insert = Gf;
		be.removeAt = Uf;
		be.replaceAt = Vf;
		be.getIn = Pn;
		be.set = qn;
		be.setIn = Mn;
		be.update = Wf;
		be.updateIn = Bf;
		be.merge = Xf;
		be.mergeDeep = jf;
		be.mergeIn = zf;
		be.omit = Kf;
		be.addDefaults = Yf;
		var Pf = "INVALID_ARGS";

		function qf(e) {
			throw new Error(e)
		}

		function Qo(e) {
			var t = Object.keys(e);
			return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
		}
		var MO = {}.hasOwnProperty;

		function Nn(e) {
			if (Array.isArray(e)) return e.slice();
			for (var t = Qo(e), r = {}, n = 0; n < t.length; n++) {
				var i = t[n];
				r[i] = e[i]
			}
			return r
		}

		function He(e, t, r) {
			var n = r;
			n == null && qf(Pf);
			for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++) a[s - 3] = arguments[s];
			for (var u = 0; u < a.length; u++) {
				var f = a[u];
				if (f != null) {
					var I = Qo(f);
					if (I.length)
						for (var p = 0; p <= I.length; p++) {
							var E = I[p];
							if (!(e && n[E] !== void 0)) {
								var m = f[E];
								t && Ln(n[E]) && Ln(m) && (m = He(e, t, n[E], m)), !(m === void 0 || m === n[E]) && (i || (i = !0, n = Nn(n)), n[E] = m)
							}
						}
				}
			}
			return n
		}

		function Ln(e) {
			var t = typeof e > "u" ? "undefined" : qO(e);
			return e != null && (t === "object" || t === "function")
		}

		function Mf(e, t) {
			return Array.isArray(t) ? e.concat(t) : e.concat([t])
		}

		function Ff(e, t) {
			return Array.isArray(t) ? t.concat(e) : [t].concat(e)
		}

		function Df(e) {
			return e.length ? e.slice(0, e.length - 1) : e
		}

		function kf(e) {
			return e.length ? e.slice(1) : e
		}

		function Gf(e, t, r) {
			return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
		}

		function Uf(e, t) {
			return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
		}

		function Vf(e, t, r) {
			if (e[t] === r) return e;
			for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
			return i[t] = r, i
		}

		function Pn(e, t) {
			if (!Array.isArray(t) && qf(Pf), e != null) {
				for (var r = e, n = 0; n < t.length; n++) {
					var i = t[n];
					if (r = r?.[i], r === void 0) return r
				}
				return r
			}
		}

		function qn(e, t, r) {
			var n = typeof t == "number" ? [] : {},
				i = e ?? n;
			if (i[t] === r) return i;
			var o = Nn(i);
			return o[t] = r, o
		}

		function Hf(e, t, r, n) {
			var i = void 0,
				o = t[n];
			if (n === t.length - 1) i = r;
			else {
				var a = Ln(e) && Ln(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
				i = Hf(a, t, r, n + 1)
			}
			return qn(e, o, i)
		}

		function Mn(e, t, r) {
			return t.length ? Hf(e, t, r, 0) : r
		}

		function Wf(e, t, r) {
			var n = e?.[t],
				i = r(n);
			return qn(e, t, i)
		}

		function Bf(e, t, r) {
			var n = Pn(e, t),
				i = r(n);
			return Mn(e, t, i)
		}

		function Xf(e, t, r, n, i, o) {
			for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
			return s.length ? He.call.apply(He, [null, !1, !1, e, t, r, n, i, o].concat(s)) : He(!1, !1, e, t, r, n, i, o)
		}

		function jf(e, t, r, n, i, o) {
			for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
			return s.length ? He.call.apply(He, [null, !1, !0, e, t, r, n, i, o].concat(s)) : He(!1, !0, e, t, r, n, i, o)
		}

		function zf(e, t, r, n, i, o, a) {
			var s = Pn(e, t);
			s == null && (s = {});
			for (var u = void 0, f = arguments.length, I = Array(f > 7 ? f - 7 : 0), p = 7; p < f; p++) I[p - 7] = arguments[p];
			return I.length ? u = He.call.apply(He, [null, !1, !1, s, r, n, i, o, a].concat(I)) : u = He(!1, !1, s, r, n, i, o, a), Mn(e, t, u)
		}

		function Kf(e, t) {
			for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
				if (MO.call(e, r[i])) {
					n = !0;
					break
				}
			if (!n) return e;
			for (var o = {}, a = Qo(e), s = 0; s < a.length; s++) {
				var u = a[s];
				r.indexOf(u) >= 0 || (o[u] = e[u])
			}
			return o
		}

		function Yf(e, t, r, n, i, o) {
			for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
			return s.length ? He.call.apply(He, [null, !0, !1, e, t, r, n, i, o].concat(s)) : He(!0, !1, e, t, r, n, i, o)
		}
		var FO = {
			clone: Nn,
			addLast: Mf,
			addFirst: Ff,
			removeLast: Df,
			removeFirst: kf,
			insert: Gf,
			removeAt: Uf,
			replaceAt: Vf,
			getIn: Pn,
			set: qn,
			setIn: Mn,
			update: Wf,
			updateIn: Bf,
			merge: Xf,
			mergeDeep: jf,
			mergeIn: zf,
			omit: Kf,
			addDefaults: Yf
		};
		be.default = FO
	});
	var $f, DO, kO, GO, UO, VO, Qf, Zf, Jf = me(() => {
		"use strict";
		Ve();
		$f = de(Zt()), {
			IX2_PREVIEW_REQUESTED: DO,
			IX2_PLAYBACK_REQUESTED: kO,
			IX2_STOP_REQUESTED: GO,
			IX2_CLEAR_REQUESTED: UO
		} = we, VO = {
			preview: {},
			playback: {},
			stop: {},
			clear: {}
		}, Qf = Object.create(null, {
			[DO]: {
				value: "preview"
			},
			[kO]: {
				value: "playback"
			},
			[GO]: {
				value: "stop"
			},
			[UO]: {
				value: "clear"
			}
		}), Zf = (e = VO, t) => {
			if (t.type in Qf) {
				let r = [Qf[t.type]];
				return (0, $f.setIn)(e, [r], { ...t.payload
				})
			}
			return e
		}
	});
	var Me, HO, WO, BO, XO, jO, zO, KO, YO, QO, $O, ed, ZO, td, rd = me(() => {
		"use strict";
		Ve();
		Me = de(Zt()), {
			IX2_SESSION_INITIALIZED: HO,
			IX2_SESSION_STARTED: WO,
			IX2_TEST_FRAME_RENDERED: BO,
			IX2_SESSION_STOPPED: XO,
			IX2_EVENT_LISTENER_ADDED: jO,
			IX2_EVENT_STATE_CHANGED: zO,
			IX2_ANIMATION_FRAME_CHANGED: KO,
			IX2_ACTION_LIST_PLAYBACK_CHANGED: YO,
			IX2_VIEWPORT_WIDTH_CHANGED: QO,
			IX2_MEDIA_QUERIES_DEFINED: $O
		} = we, ed = {
			active: !1,
			tick: 0,
			eventListeners: [],
			eventState: {},
			playbackState: {},
			viewportWidth: 0,
			mediaQueryKey: null,
			hasBoundaryNodes: !1,
			hasDefinedMediaQueries: !1,
			reducedMotion: !1
		}, ZO = 20, td = (e = ed, t) => {
			switch (t.type) {
				case HO:
					{
						let {
							hasBoundaryNodes: r,
							reducedMotion: n
						} = t.payload;
						return (0, Me.merge)(e, {
							hasBoundaryNodes: r,
							reducedMotion: n
						})
					}
				case WO:
					return (0, Me.set)(e, "active", !0);
				case BO:
					{
						let {
							payload: {
								step: r = ZO
							}
						} = t;
						return (0, Me.set)(e, "tick", e.tick + r)
					}
				case XO:
					return ed;
				case KO:
					{
						let {
							payload: {
								now: r
							}
						} = t;
						return (0, Me.set)(e, "tick", r)
					}
				case jO:
					{
						let r = (0, Me.addLast)(e.eventListeners, t.payload);
						return (0, Me.set)(e, "eventListeners", r)
					}
				case zO:
					{
						let {
							stateKey: r,
							newState: n
						} = t.payload;
						return (0, Me.setIn)(e, ["eventState", r], n)
					}
				case YO:
					{
						let {
							actionListId: r,
							isPlaying: n
						} = t.payload;
						return (0, Me.setIn)(e, ["playbackState", r], n)
					}
				case QO:
					{
						let {
							width: r,
							mediaQueries: n
						} = t.payload,
						i = n.length,
						o = null;
						for (let a = 0; a < i; a++) {
							let {
								key: s,
								min: u,
								max: f
							} = n[a];
							if (r >= u && r <= f) {
								o = s;
								break
							}
						}
						return (0, Me.merge)(e, {
							viewportWidth: r,
							mediaQueryKey: o
						})
					}
				case $O:
					return (0, Me.set)(e, "hasDefinedMediaQueries", !0);
				default:
					return e
			}
		}
	});
	var id = l((pB, nd) => {
		function JO() {
			this.__data__ = [], this.size = 0
		}
		nd.exports = JO
	});
	var Fn = l((vB, od) => {
		function eA(e, t) {
			return e === t || e !== e && t !== t
		}
		od.exports = eA
	});
	var qr = l((gB, ad) => {
		var tA = Fn();

		function rA(e, t) {
			for (var r = e.length; r--;)
				if (tA(e[r][0], t)) return r;
			return -1
		}
		ad.exports = rA
	});
	var ud = l((hB, sd) => {
		var nA = qr(),
			iA = Array.prototype,
			oA = iA.splice;

		function aA(e) {
			var t = this.__data__,
				r = nA(t, e);
			if (r < 0) return !1;
			var n = t.length - 1;
			return r == n ? t.pop() : oA.call(t, r, 1), --this.size, !0
		}
		sd.exports = aA
	});
	var ld = l((mB, cd) => {
		var sA = qr();

		function uA(e) {
			var t = this.__data__,
				r = sA(t, e);
			return r < 0 ? void 0 : t[r][1]
		}
		cd.exports = uA
	});
	var dd = l((yB, fd) => {
		var cA = qr();

		function lA(e) {
			return cA(this.__data__, e) > -1
		}
		fd.exports = lA
	});
	var vd = l((EB, pd) => {
		var fA = qr();

		function dA(e, t) {
			var r = this.__data__,
				n = fA(r, e);
			return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
		}
		pd.exports = dA
	});
	var Mr = l((bB, gd) => {
		var pA = id(),
			vA = ud(),
			gA = ld(),
			hA = dd(),
			mA = vd();

		function Jt(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}
		Jt.prototype.clear = pA;
		Jt.prototype.delete = vA;
		Jt.prototype.get = gA;
		Jt.prototype.has = hA;
		Jt.prototype.set = mA;
		gd.exports = Jt
	});
	var md = l((_B, hd) => {
		var yA = Mr();

		function EA() {
			this.__data__ = new yA, this.size = 0
		}
		hd.exports = EA
	});
	var Ed = l((IB, yd) => {
		function bA(e) {
			var t = this.__data__,
				r = t.delete(e);
			return this.size = t.size, r
		}
		yd.exports = bA
	});
	var _d = l((TB, bd) => {
		function _A(e) {
			return this.__data__.get(e)
		}
		bd.exports = _A
	});
	var Td = l((wB, Id) => {
		function IA(e) {
			return this.__data__.has(e)
		}
		Id.exports = IA
	});
	var ut = l((xB, wd) => {
		function TA(e) {
			var t = typeof e;
			return e != null && (t == "object" || t == "function")
		}
		wd.exports = TA
	});
	var $o = l((OB, xd) => {
		var wA = Tt(),
			xA = ut(),
			OA = "[object AsyncFunction]",
			AA = "[object Function]",
			SA = "[object GeneratorFunction]",
			CA = "[object Proxy]";

		function RA(e) {
			if (!xA(e)) return !1;
			var t = wA(e);
			return t == AA || t == SA || t == OA || t == CA
		}
		xd.exports = RA
	});
	var Ad = l((AB, Od) => {
		var LA = $e(),
			NA = LA["__core-js_shared__"];
		Od.exports = NA
	});
	var Rd = l((SB, Cd) => {
		var Zo = Ad(),
			Sd = function() {
				var e = /[^.]+$/.exec(Zo && Zo.keys && Zo.keys.IE_PROTO || "");
				return e ? "Symbol(src)_1." + e : ""
			}();

		function PA(e) {
			return !!Sd && Sd in e
		}
		Cd.exports = PA
	});
	var Jo = l((CB, Ld) => {
		var qA = Function.prototype,
			MA = qA.toString;

		function FA(e) {
			if (e != null) {
				try {
					return MA.call(e)
				} catch {}
				try {
					return e + ""
				} catch {}
			}
			return ""
		}
		Ld.exports = FA
	});
	var Pd = l((RB, Nd) => {
		var DA = $o(),
			kA = Rd(),
			GA = ut(),
			UA = Jo(),
			VA = /[\\^$.*+?()[\]{}|]/g,
			HA = /^\[object .+?Constructor\]$/,
			WA = Function.prototype,
			BA = Object.prototype,
			XA = WA.toString,
			jA = BA.hasOwnProperty,
			zA = RegExp("^" + XA.call(jA).replace(VA, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

		function KA(e) {
			if (!GA(e) || kA(e)) return !1;
			var t = DA(e) ? zA : HA;
			return t.test(UA(e))
		}
		Nd.exports = KA
	});
	var Md = l((LB, qd) => {
		function YA(e, t) {
			return e?.[t]
		}
		qd.exports = YA
	});
	var wt = l((NB, Fd) => {
		var QA = Pd(),
			$A = Md();

		function ZA(e, t) {
			var r = $A(e, t);
			return QA(r) ? r : void 0
		}
		Fd.exports = ZA
	});
	var Dn = l((PB, Dd) => {
		var JA = wt(),
			eS = $e(),
			tS = JA(eS, "Map");
		Dd.exports = tS
	});
	var Fr = l((qB, kd) => {
		var rS = wt(),
			nS = rS(Object, "create");
		kd.exports = nS
	});
	var Vd = l((MB, Ud) => {
		var Gd = Fr();

		function iS() {
			this.__data__ = Gd ? Gd(null) : {}, this.size = 0
		}
		Ud.exports = iS
	});
	var Wd = l((FB, Hd) => {
		function oS(e) {
			var t = this.has(e) && delete this.__data__[e];
			return this.size -= t ? 1 : 0, t
		}
		Hd.exports = oS
	});
	var Xd = l((DB, Bd) => {
		var aS = Fr(),
			sS = "__lodash_hash_undefined__",
			uS = Object.prototype,
			cS = uS.hasOwnProperty;

		function lS(e) {
			var t = this.__data__;
			if (aS) {
				var r = t[e];
				return r === sS ? void 0 : r
			}
			return cS.call(t, e) ? t[e] : void 0
		}
		Bd.exports = lS
	});
	var zd = l((kB, jd) => {
		var fS = Fr(),
			dS = Object.prototype,
			pS = dS.hasOwnProperty;

		function vS(e) {
			var t = this.__data__;
			return fS ? t[e] !== void 0 : pS.call(t, e)
		}
		jd.exports = vS
	});
	var Yd = l((GB, Kd) => {
		var gS = Fr(),
			hS = "__lodash_hash_undefined__";

		function mS(e, t) {
			var r = this.__data__;
			return this.size += this.has(e) ? 0 : 1, r[e] = gS && t === void 0 ? hS : t, this
		}
		Kd.exports = mS
	});
	var $d = l((UB, Qd) => {
		var yS = Vd(),
			ES = Wd(),
			bS = Xd(),
			_S = zd(),
			IS = Yd();

		function er(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}
		er.prototype.clear = yS;
		er.prototype.delete = ES;
		er.prototype.get = bS;
		er.prototype.has = _S;
		er.prototype.set = IS;
		Qd.exports = er
	});
	var ep = l((VB, Jd) => {
		var Zd = $d(),
			TS = Mr(),
			wS = Dn();

		function xS() {
			this.size = 0, this.__data__ = {
				hash: new Zd,
				map: new(wS || TS),
				string: new Zd
			}
		}
		Jd.exports = xS
	});
	var rp = l((HB, tp) => {
		function OS(e) {
			var t = typeof e;
			return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
		}
		tp.exports = OS
	});
	var Dr = l((WB, np) => {
		var AS = rp();

		function SS(e, t) {
			var r = e.__data__;
			return AS(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
		}
		np.exports = SS
	});
	var op = l((BB, ip) => {
		var CS = Dr();

		function RS(e) {
			var t = CS(this, e).delete(e);
			return this.size -= t ? 1 : 0, t
		}
		ip.exports = RS
	});
	var sp = l((XB, ap) => {
		var LS = Dr();

		function NS(e) {
			return LS(this, e).get(e)
		}
		ap.exports = NS
	});
	var cp = l((jB, up) => {
		var PS = Dr();

		function qS(e) {
			return PS(this, e).has(e)
		}
		up.exports = qS
	});
	var fp = l((zB, lp) => {
		var MS = Dr();

		function FS(e, t) {
			var r = MS(this, e),
				n = r.size;
			return r.set(e, t), this.size += r.size == n ? 0 : 1, this
		}
		lp.exports = FS
	});
	var kn = l((KB, dp) => {
		var DS = ep(),
			kS = op(),
			GS = sp(),
			US = cp(),
			VS = fp();

		function tr(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}
		tr.prototype.clear = DS;
		tr.prototype.delete = kS;
		tr.prototype.get = GS;
		tr.prototype.has = US;
		tr.prototype.set = VS;
		dp.exports = tr
	});
	var vp = l((YB, pp) => {
		var HS = Mr(),
			WS = Dn(),
			BS = kn(),
			XS = 200;

		function jS(e, t) {
			var r = this.__data__;
			if (r instanceof HS) {
				var n = r.__data__;
				if (!WS || n.length < XS - 1) return n.push([e, t]), this.size = ++r.size, this;
				r = this.__data__ = new BS(n)
			}
			return r.set(e, t), this.size = r.size, this
		}
		pp.exports = jS
	});
	var ea = l((QB, gp) => {
		var zS = Mr(),
			KS = md(),
			YS = Ed(),
			QS = _d(),
			$S = Td(),
			ZS = vp();

		function rr(e) {
			var t = this.__data__ = new zS(e);
			this.size = t.size
		}
		rr.prototype.clear = KS;
		rr.prototype.delete = YS;
		rr.prototype.get = QS;
		rr.prototype.has = $S;
		rr.prototype.set = ZS;
		gp.exports = rr
	});
	var mp = l(($B, hp) => {
		var JS = "__lodash_hash_undefined__";

		function eC(e) {
			return this.__data__.set(e, JS), this
		}
		hp.exports = eC
	});
	var Ep = l((ZB, yp) => {
		function tC(e) {
			return this.__data__.has(e)
		}
		yp.exports = tC
	});
	var _p = l((JB, bp) => {
		var rC = kn(),
			nC = mp(),
			iC = Ep();

		function Gn(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.__data__ = new rC; ++t < r;) this.add(e[t])
		}
		Gn.prototype.add = Gn.prototype.push = nC;
		Gn.prototype.has = iC;
		bp.exports = Gn
	});
	var Tp = l((e5, Ip) => {
		function oC(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
				if (t(e[r], r, e)) return !0;
			return !1
		}
		Ip.exports = oC
	});
	var xp = l((t5, wp) => {
		function aC(e, t) {
			return e.has(t)
		}
		wp.exports = aC
	});
	var ta = l((r5, Op) => {
		var sC = _p(),
			uC = Tp(),
			cC = xp(),
			lC = 1,
			fC = 2;

		function dC(e, t, r, n, i, o) {
			var a = r & lC,
				s = e.length,
				u = t.length;
			if (s != u && !(a && u > s)) return !1;
			var f = o.get(e),
				I = o.get(t);
			if (f && I) return f == t && I == e;
			var p = -1,
				E = !0,
				m = r & fC ? new sC : void 0;
			for (o.set(e, t), o.set(t, e); ++p < s;) {
				var b = e[p],
					T = t[p];
				if (n) var O = a ? n(T, b, p, t, e, o) : n(b, T, p, e, t, o);
				if (O !== void 0) {
					if (O) continue;
					E = !1;
					break
				}
				if (m) {
					if (!uC(t, function(x, M) {
							if (!cC(m, M) && (b === x || i(b, x, r, n, o))) return m.push(M)
						})) {
						E = !1;
						break
					}
				} else if (!(b === T || i(b, T, r, n, o))) {
					E = !1;
					break
				}
			}
			return o.delete(e), o.delete(t), E
		}
		Op.exports = dC
	});
	var Sp = l((n5, Ap) => {
		var pC = $e(),
			vC = pC.Uint8Array;
		Ap.exports = vC
	});
	var Rp = l((i5, Cp) => {
		function gC(e) {
			var t = -1,
				r = Array(e.size);
			return e.forEach(function(n, i) {
				r[++t] = [i, n]
			}), r
		}
		Cp.exports = gC
	});
	var Np = l((o5, Lp) => {
		function hC(e) {
			var t = -1,
				r = Array(e.size);
			return e.forEach(function(n) {
				r[++t] = n
			}), r
		}
		Lp.exports = hC
	});
	var Dp = l((a5, Fp) => {
		var Pp = Yt(),
			qp = Sp(),
			mC = Fn(),
			yC = ta(),
			EC = Rp(),
			bC = Np(),
			_C = 1,
			IC = 2,
			TC = "[object Boolean]",
			wC = "[object Date]",
			xC = "[object Error]",
			OC = "[object Map]",
			AC = "[object Number]",
			SC = "[object RegExp]",
			CC = "[object Set]",
			RC = "[object String]",
			LC = "[object Symbol]",
			NC = "[object ArrayBuffer]",
			PC = "[object DataView]",
			Mp = Pp ? Pp.prototype : void 0,
			ra = Mp ? Mp.valueOf : void 0;

		function qC(e, t, r, n, i, o, a) {
			switch (r) {
				case PC:
					if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
					e = e.buffer, t = t.buffer;
				case NC:
					return !(e.byteLength != t.byteLength || !o(new qp(e), new qp(t)));
				case TC:
				case wC:
				case AC:
					return mC(+e, +t);
				case xC:
					return e.name == t.name && e.message == t.message;
				case SC:
				case RC:
					return e == t + "";
				case OC:
					var s = EC;
				case CC:
					var u = n & _C;
					if (s || (s = bC), e.size != t.size && !u) return !1;
					var f = a.get(e);
					if (f) return f == t;
					n |= IC, a.set(e, t);
					var I = yC(s(e), s(t), n, i, o, a);
					return a.delete(e), I;
				case LC:
					if (ra) return ra.call(e) == ra.call(t)
			}
			return !1
		}
		Fp.exports = qC
	});
	var Un = l((s5, kp) => {
		function MC(e, t) {
			for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
			return e
		}
		kp.exports = MC
	});
	var xe = l((u5, Gp) => {
		var FC = Array.isArray;
		Gp.exports = FC
	});
	var na = l((c5, Up) => {
		var DC = Un(),
			kC = xe();

		function GC(e, t, r) {
			var n = t(e);
			return kC(e) ? n : DC(n, r(e))
		}
		Up.exports = GC
	});
	var Hp = l((l5, Vp) => {
		function UC(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
				var a = e[r];
				t(a, r, e) && (o[i++] = a)
			}
			return o
		}
		Vp.exports = UC
	});
	var ia = l((f5, Wp) => {
		function VC() {
			return []
		}
		Wp.exports = VC
	});
	var oa = l((d5, Xp) => {
		var HC = Hp(),
			WC = ia(),
			BC = Object.prototype,
			XC = BC.propertyIsEnumerable,
			Bp = Object.getOwnPropertySymbols,
			jC = Bp ? function(e) {
				return e == null ? [] : (e = Object(e), HC(Bp(e), function(t) {
					return XC.call(e, t)
				}))
			} : WC;
		Xp.exports = jC
	});
	var zp = l((p5, jp) => {
		function zC(e, t) {
			for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
			return n
		}
		jp.exports = zC
	});
	var Yp = l((v5, Kp) => {
		var KC = Tt(),
			YC = vt(),
			QC = "[object Arguments]";

		function $C(e) {
			return YC(e) && KC(e) == QC
		}
		Kp.exports = $C
	});
	var kr = l((g5, Zp) => {
		var Qp = Yp(),
			ZC = vt(),
			$p = Object.prototype,
			JC = $p.hasOwnProperty,
			eR = $p.propertyIsEnumerable,
			tR = Qp(function() {
				return arguments
			}()) ? Qp : function(e) {
				return ZC(e) && JC.call(e, "callee") && !eR.call(e, "callee")
			};
		Zp.exports = tR
	});
	var ev = l((h5, Jp) => {
		function rR() {
			return !1
		}
		Jp.exports = rR
	});
	var Vn = l((Gr, nr) => {
		var nR = $e(),
			iR = ev(),
			nv = typeof Gr == "object" && Gr && !Gr.nodeType && Gr,
			tv = nv && typeof nr == "object" && nr && !nr.nodeType && nr,
			oR = tv && tv.exports === nv,
			rv = oR ? nR.Buffer : void 0,
			aR = rv ? rv.isBuffer : void 0,
			sR = aR || iR;
		nr.exports = sR
	});
	var Hn = l((m5, iv) => {
		var uR = 9007199254740991,
			cR = /^(?:0|[1-9]\d*)$/;

		function lR(e, t) {
			var r = typeof e;
			return t = t ?? uR, !!t && (r == "number" || r != "symbol" && cR.test(e)) && e > -1 && e % 1 == 0 && e < t
		}
		iv.exports = lR
	});
	var Wn = l((y5, ov) => {
		var fR = 9007199254740991;

		function dR(e) {
			return typeof e == "number" && e > -1 && e % 1 == 0 && e <= fR
		}
		ov.exports = dR
	});
	var sv = l((E5, av) => {
		var pR = Tt(),
			vR = Wn(),
			gR = vt(),
			hR = "[object Arguments]",
			mR = "[object Array]",
			yR = "[object Boolean]",
			ER = "[object Date]",
			bR = "[object Error]",
			_R = "[object Function]",
			IR = "[object Map]",
			TR = "[object Number]",
			wR = "[object Object]",
			xR = "[object RegExp]",
			OR = "[object Set]",
			AR = "[object String]",
			SR = "[object WeakMap]",
			CR = "[object ArrayBuffer]",
			RR = "[object DataView]",
			LR = "[object Float32Array]",
			NR = "[object Float64Array]",
			PR = "[object Int8Array]",
			qR = "[object Int16Array]",
			MR = "[object Int32Array]",
			FR = "[object Uint8Array]",
			DR = "[object Uint8ClampedArray]",
			kR = "[object Uint16Array]",
			GR = "[object Uint32Array]",
			he = {};
		he[LR] = he[NR] = he[PR] = he[qR] = he[MR] = he[FR] = he[DR] = he[kR] = he[GR] = !0;
		he[hR] = he[mR] = he[CR] = he[yR] = he[RR] = he[ER] = he[bR] = he[_R] = he[IR] = he[TR] = he[wR] = he[xR] = he[OR] = he[AR] = he[SR] = !1;

		function UR(e) {
			return gR(e) && vR(e.length) && !!he[pR(e)]
		}
		av.exports = UR
	});
	var cv = l((b5, uv) => {
		function VR(e) {
			return function(t) {
				return e(t)
			}
		}
		uv.exports = VR
	});
	var fv = l((Ur, ir) => {
		var HR = Lo(),
			lv = typeof Ur == "object" && Ur && !Ur.nodeType && Ur,
			Vr = lv && typeof ir == "object" && ir && !ir.nodeType && ir,
			WR = Vr && Vr.exports === lv,
			aa = WR && HR.process,
			BR = function() {
				try {
					var e = Vr && Vr.require && Vr.require("util").types;
					return e || aa && aa.binding && aa.binding("util")
				} catch {}
			}();
		ir.exports = BR
	});
	var Bn = l((_5, vv) => {
		var XR = sv(),
			jR = cv(),
			dv = fv(),
			pv = dv && dv.isTypedArray,
			zR = pv ? jR(pv) : XR;
		vv.exports = zR
	});
	var sa = l((I5, gv) => {
		var KR = zp(),
			YR = kr(),
			QR = xe(),
			$R = Vn(),
			ZR = Hn(),
			JR = Bn(),
			eL = Object.prototype,
			tL = eL.hasOwnProperty;

		function rL(e, t) {
			var r = QR(e),
				n = !r && YR(e),
				i = !r && !n && $R(e),
				o = !r && !n && !i && JR(e),
				a = r || n || i || o,
				s = a ? KR(e.length, String) : [],
				u = s.length;
			for (var f in e)(t || tL.call(e, f)) && !(a && (f == "length" || i && (f == "offset" || f == "parent") || o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || ZR(f, u))) && s.push(f);
			return s
		}
		gv.exports = rL
	});
	var Xn = l((T5, hv) => {
		var nL = Object.prototype;

		function iL(e) {
			var t = e && e.constructor,
				r = typeof t == "function" && t.prototype || nL;
			return e === r
		}
		hv.exports = iL
	});
	var yv = l((w5, mv) => {
		var oL = No(),
			aL = oL(Object.keys, Object);
		mv.exports = aL
	});
	var jn = l((x5, Ev) => {
		var sL = Xn(),
			uL = yv(),
			cL = Object.prototype,
			lL = cL.hasOwnProperty;

		function fL(e) {
			if (!sL(e)) return uL(e);
			var t = [];
			for (var r in Object(e)) lL.call(e, r) && r != "constructor" && t.push(r);
			return t
		}
		Ev.exports = fL
	});
	var Mt = l((O5, bv) => {
		var dL = $o(),
			pL = Wn();

		function vL(e) {
			return e != null && pL(e.length) && !dL(e)
		}
		bv.exports = vL
	});
	var Hr = l((A5, _v) => {
		var gL = sa(),
			hL = jn(),
			mL = Mt();

		function yL(e) {
			return mL(e) ? gL(e) : hL(e)
		}
		_v.exports = yL
	});
	var Tv = l((S5, Iv) => {
		var EL = na(),
			bL = oa(),
			_L = Hr();

		function IL(e) {
			return EL(e, _L, bL)
		}
		Iv.exports = IL
	});
	var Ov = l((C5, xv) => {
		var wv = Tv(),
			TL = 1,
			wL = Object.prototype,
			xL = wL.hasOwnProperty;

		function OL(e, t, r, n, i, o) {
			var a = r & TL,
				s = wv(e),
				u = s.length,
				f = wv(t),
				I = f.length;
			if (u != I && !a) return !1;
			for (var p = u; p--;) {
				var E = s[p];
				if (!(a ? E in t : xL.call(t, E))) return !1
			}
			var m = o.get(e),
				b = o.get(t);
			if (m && b) return m == t && b == e;
			var T = !0;
			o.set(e, t), o.set(t, e);
			for (var O = a; ++p < u;) {
				E = s[p];
				var x = e[E],
					M = t[E];
				if (n) var P = a ? n(M, x, E, t, e, o) : n(x, M, E, e, t, o);
				if (!(P === void 0 ? x === M || i(x, M, r, n, o) : P)) {
					T = !1;
					break
				}
				O || (O = E == "constructor")
			}
			if (T && !O) {
				var V = e.constructor,
					W = t.constructor;
				V != W && "constructor" in e && "constructor" in t && !(typeof V == "function" && V instanceof V && typeof W == "function" && W instanceof W) && (T = !1)
			}
			return o.delete(e), o.delete(t), T
		}
		xv.exports = OL
	});
	var Sv = l((R5, Av) => {
		var AL = wt(),
			SL = $e(),
			CL = AL(SL, "DataView");
		Av.exports = CL
	});
	var Rv = l((L5, Cv) => {
		var RL = wt(),
			LL = $e(),
			NL = RL(LL, "Promise");
		Cv.exports = NL
	});
	var Nv = l((N5, Lv) => {
		var PL = wt(),
			qL = $e(),
			ML = PL(qL, "Set");
		Lv.exports = ML
	});
	var ua = l((P5, Pv) => {
		var FL = wt(),
			DL = $e(),
			kL = FL(DL, "WeakMap");
		Pv.exports = kL
	});
	var zn = l((q5, Uv) => {
		var ca = Sv(),
			la = Dn(),
			fa = Rv(),
			da = Nv(),
			pa = ua(),
			Gv = Tt(),
			or = Jo(),
			qv = "[object Map]",
			GL = "[object Object]",
			Mv = "[object Promise]",
			Fv = "[object Set]",
			Dv = "[object WeakMap]",
			kv = "[object DataView]",
			UL = or(ca),
			VL = or(la),
			HL = or(fa),
			WL = or(da),
			BL = or(pa),
			Ft = Gv;
		(ca && Ft(new ca(new ArrayBuffer(1))) != kv || la && Ft(new la) != qv || fa && Ft(fa.resolve()) != Mv || da && Ft(new da) != Fv || pa && Ft(new pa) != Dv) && (Ft = function(e) {
			var t = Gv(e),
				r = t == GL ? e.constructor : void 0,
				n = r ? or(r) : "";
			if (n) switch (n) {
				case UL:
					return kv;
				case VL:
					return qv;
				case HL:
					return Mv;
				case WL:
					return Fv;
				case BL:
					return Dv
			}
			return t
		});
		Uv.exports = Ft
	});
	var Kv = l((M5, zv) => {
		var va = ea(),
			XL = ta(),
			jL = Dp(),
			zL = Ov(),
			Vv = zn(),
			Hv = xe(),
			Wv = Vn(),
			KL = Bn(),
			YL = 1,
			Bv = "[object Arguments]",
			Xv = "[object Array]",
			Kn = "[object Object]",
			QL = Object.prototype,
			jv = QL.hasOwnProperty;

		function $L(e, t, r, n, i, o) {
			var a = Hv(e),
				s = Hv(t),
				u = a ? Xv : Vv(e),
				f = s ? Xv : Vv(t);
			u = u == Bv ? Kn : u, f = f == Bv ? Kn : f;
			var I = u == Kn,
				p = f == Kn,
				E = u == f;
			if (E && Wv(e)) {
				if (!Wv(t)) return !1;
				a = !0, I = !1
			}
			if (E && !I) return o || (o = new va), a || KL(e) ? XL(e, t, r, n, i, o) : jL(e, t, u, r, n, i, o);
			if (!(r & YL)) {
				var m = I && jv.call(e, "__wrapped__"),
					b = p && jv.call(t, "__wrapped__");
				if (m || b) {
					var T = m ? e.value() : e,
						O = b ? t.value() : t;
					return o || (o = new va), i(T, O, r, n, o)
				}
			}
			return E ? (o || (o = new va), zL(e, t, r, n, i, o)) : !1
		}
		zv.exports = $L
	});
	var ga = l((F5, $v) => {
		var ZL = Kv(),
			Yv = vt();

		function Qv(e, t, r, n, i) {
			return e === t ? !0 : e == null || t == null || !Yv(e) && !Yv(t) ? e !== e && t !== t : ZL(e, t, r, n, Qv, i)
		}
		$v.exports = Qv
	});
	var Jv = l((D5, Zv) => {
		var JL = ea(),
			eN = ga(),
			tN = 1,
			rN = 2;

		function nN(e, t, r, n) {
			var i = r.length,
				o = i,
				a = !n;
			if (e == null) return !o;
			for (e = Object(e); i--;) {
				var s = r[i];
				if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
			}
			for (; ++i < o;) {
				s = r[i];
				var u = s[0],
					f = e[u],
					I = s[1];
				if (a && s[2]) {
					if (f === void 0 && !(u in e)) return !1
				} else {
					var p = new JL;
					if (n) var E = n(f, I, u, e, t, p);
					if (!(E === void 0 ? eN(I, f, tN | rN, n, p) : E)) return !1
				}
			}
			return !0
		}
		Zv.exports = nN
	});
	var ha = l((k5, eg) => {
		var iN = ut();

		function oN(e) {
			return e === e && !iN(e)
		}
		eg.exports = oN
	});
	var rg = l((G5, tg) => {
		var aN = ha(),
			sN = Hr();

		function uN(e) {
			for (var t = sN(e), r = t.length; r--;) {
				var n = t[r],
					i = e[n];
				t[r] = [n, i, aN(i)]
			}
			return t
		}
		tg.exports = uN
	});
	var ma = l((U5, ng) => {
		function cN(e, t) {
			return function(r) {
				return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
			}
		}
		ng.exports = cN
	});
	var og = l((V5, ig) => {
		var lN = Jv(),
			fN = rg(),
			dN = ma();

		function pN(e) {
			var t = fN(e);
			return t.length == 1 && t[0][2] ? dN(t[0][0], t[0][1]) : function(r) {
				return r === e || lN(r, e, t)
			}
		}
		ig.exports = pN
	});
	var Wr = l((H5, ag) => {
		var vN = Tt(),
			gN = vt(),
			hN = "[object Symbol]";

		function mN(e) {
			return typeof e == "symbol" || gN(e) && vN(e) == hN
		}
		ag.exports = mN
	});
	var Yn = l((W5, sg) => {
		var yN = xe(),
			EN = Wr(),
			bN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
			_N = /^\w*$/;

		function IN(e, t) {
			if (yN(e)) return !1;
			var r = typeof e;
			return r == "number" || r == "symbol" || r == "boolean" || e == null || EN(e) ? !0 : _N.test(e) || !bN.test(e) || t != null && e in Object(t)
		}
		sg.exports = IN
	});
	var lg = l((B5, cg) => {
		var ug = kn(),
			TN = "Expected a function";

		function ya(e, t) {
			if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(TN);
			var r = function() {
				var n = arguments,
					i = t ? t.apply(this, n) : n[0],
					o = r.cache;
				if (o.has(i)) return o.get(i);
				var a = e.apply(this, n);
				return r.cache = o.set(i, a) || o, a
			};
			return r.cache = new(ya.Cache || ug), r
		}
		ya.Cache = ug;
		cg.exports = ya
	});
	var dg = l((X5, fg) => {
		var wN = lg(),
			xN = 500;

		function ON(e) {
			var t = wN(e, function(n) {
					return r.size === xN && r.clear(), n
				}),
				r = t.cache;
			return t
		}
		fg.exports = ON
	});
	var vg = l((j5, pg) => {
		var AN = dg(),
			SN = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
			CN = /\\(\\)?/g,
			RN = AN(function(e) {
				var t = [];
				return e.charCodeAt(0) === 46 && t.push(""), e.replace(SN, function(r, n, i, o) {
					t.push(i ? o.replace(CN, "$1") : n || r)
				}), t
			});
		pg.exports = RN
	});
	var Ea = l((z5, gg) => {
		function LN(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
			return i
		}
		gg.exports = LN
	});
	var _g = l((K5, bg) => {
		var hg = Yt(),
			NN = Ea(),
			PN = xe(),
			qN = Wr(),
			MN = 1 / 0,
			mg = hg ? hg.prototype : void 0,
			yg = mg ? mg.toString : void 0;

		function Eg(e) {
			if (typeof e == "string") return e;
			if (PN(e)) return NN(e, Eg) + "";
			if (qN(e)) return yg ? yg.call(e) : "";
			var t = e + "";
			return t == "0" && 1 / e == -MN ? "-0" : t
		}
		bg.exports = Eg
	});
	var Tg = l((Y5, Ig) => {
		var FN = _g();

		function DN(e) {
			return e == null ? "" : FN(e)
		}
		Ig.exports = DN
	});
	var Br = l((Q5, wg) => {
		var kN = xe(),
			GN = Yn(),
			UN = vg(),
			VN = Tg();

		function HN(e, t) {
			return kN(e) ? e : GN(e, t) ? [e] : UN(VN(e))
		}
		wg.exports = HN
	});
	var ar = l(($5, xg) => {
		var WN = Wr(),
			BN = 1 / 0;

		function XN(e) {
			if (typeof e == "string" || WN(e)) return e;
			var t = e + "";
			return t == "0" && 1 / e == -BN ? "-0" : t
		}
		xg.exports = XN
	});
	var Qn = l((Z5, Og) => {
		var jN = Br(),
			zN = ar();

		function KN(e, t) {
			t = jN(t, e);
			for (var r = 0, n = t.length; e != null && r < n;) e = e[zN(t[r++])];
			return r && r == n ? e : void 0
		}
		Og.exports = KN
	});
	var $n = l((J5, Ag) => {
		var YN = Qn();

		function QN(e, t, r) {
			var n = e == null ? void 0 : YN(e, t);
			return n === void 0 ? r : n
		}
		Ag.exports = QN
	});
	var Cg = l((eX, Sg) => {
		function $N(e, t) {
			return e != null && t in Object(e)
		}
		Sg.exports = $N
	});
	var Lg = l((tX, Rg) => {
		var ZN = Br(),
			JN = kr(),
			eP = xe(),
			tP = Hn(),
			rP = Wn(),
			nP = ar();

		function iP(e, t, r) {
			t = ZN(t, e);
			for (var n = -1, i = t.length, o = !1; ++n < i;) {
				var a = nP(t[n]);
				if (!(o = e != null && r(e, a))) break;
				e = e[a]
			}
			return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && rP(i) && tP(a, i) && (eP(e) || JN(e)))
		}
		Rg.exports = iP
	});
	var Pg = l((rX, Ng) => {
		var oP = Cg(),
			aP = Lg();

		function sP(e, t) {
			return e != null && aP(e, t, oP)
		}
		Ng.exports = sP
	});
	var Mg = l((nX, qg) => {
		var uP = ga(),
			cP = $n(),
			lP = Pg(),
			fP = Yn(),
			dP = ha(),
			pP = ma(),
			vP = ar(),
			gP = 1,
			hP = 2;

		function mP(e, t) {
			return fP(e) && dP(t) ? pP(vP(e), t) : function(r) {
				var n = cP(r, e);
				return n === void 0 && n === t ? lP(r, e) : uP(t, n, gP | hP)
			}
		}
		qg.exports = mP
	});
	var Zn = l((iX, Fg) => {
		function yP(e) {
			return e
		}
		Fg.exports = yP
	});
	var ba = l((oX, Dg) => {
		function EP(e) {
			return function(t) {
				return t?.[e]
			}
		}
		Dg.exports = EP
	});
	var Gg = l((aX, kg) => {
		var bP = Qn();

		function _P(e) {
			return function(t) {
				return bP(t, e)
			}
		}
		kg.exports = _P
	});
	var Vg = l((sX, Ug) => {
		var IP = ba(),
			TP = Gg(),
			wP = Yn(),
			xP = ar();

		function OP(e) {
			return wP(e) ? IP(xP(e)) : TP(e)
		}
		Ug.exports = OP
	});
	var xt = l((uX, Hg) => {
		var AP = og(),
			SP = Mg(),
			CP = Zn(),
			RP = xe(),
			LP = Vg();

		function NP(e) {
			return typeof e == "function" ? e : e == null ? CP : typeof e == "object" ? RP(e) ? SP(e[0], e[1]) : AP(e) : LP(e)
		}
		Hg.exports = NP
	});
	var _a = l((cX, Wg) => {
		var PP = xt(),
			qP = Mt(),
			MP = Hr();

		function FP(e) {
			return function(t, r, n) {
				var i = Object(t);
				if (!qP(t)) {
					var o = PP(r, 3);
					t = MP(t), r = function(s) {
						return o(i[s], s, i)
					}
				}
				var a = e(t, r, n);
				return a > -1 ? i[o ? t[a] : a] : void 0
			}
		}
		Wg.exports = FP
	});
	var Ia = l((lX, Bg) => {
		function DP(e, t, r, n) {
			for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
				if (t(e[o], o, e)) return o;
			return -1
		}
		Bg.exports = DP
	});
	var jg = l((fX, Xg) => {
		var kP = /\s/;

		function GP(e) {
			for (var t = e.length; t-- && kP.test(e.charAt(t)););
			return t
		}
		Xg.exports = GP
	});
	var Kg = l((dX, zg) => {
		var UP = jg(),
			VP = /^\s+/;

		function HP(e) {
			return e && e.slice(0, UP(e) + 1).replace(VP, "")
		}
		zg.exports = HP
	});
	var Jn = l((pX, $g) => {
		var WP = Kg(),
			Yg = ut(),
			BP = Wr(),
			Qg = 0 / 0,
			XP = /^[-+]0x[0-9a-f]+$/i,
			jP = /^0b[01]+$/i,
			zP = /^0o[0-7]+$/i,
			KP = parseInt;

		function YP(e) {
			if (typeof e == "number") return e;
			if (BP(e)) return Qg;
			if (Yg(e)) {
				var t = typeof e.valueOf == "function" ? e.valueOf() : e;
				e = Yg(t) ? t + "" : t
			}
			if (typeof e != "string") return e === 0 ? e : +e;
			e = WP(e);
			var r = jP.test(e);
			return r || zP.test(e) ? KP(e.slice(2), r ? 2 : 8) : XP.test(e) ? Qg : +e
		}
		$g.exports = YP
	});
	var eh = l((vX, Jg) => {
		var QP = Jn(),
			Zg = 1 / 0,
			$P = 17976931348623157e292;

		function ZP(e) {
			if (!e) return e === 0 ? e : 0;
			if (e = QP(e), e === Zg || e === -Zg) {
				var t = e < 0 ? -1 : 1;
				return t * $P
			}
			return e === e ? e : 0
		}
		Jg.exports = ZP
	});
	var Ta = l((gX, th) => {
		var JP = eh();

		function eq(e) {
			var t = JP(e),
				r = t % 1;
			return t === t ? r ? t - r : t : 0
		}
		th.exports = eq
	});
	var nh = l((hX, rh) => {
		var tq = Ia(),
			rq = xt(),
			nq = Ta(),
			iq = Math.max;

		function oq(e, t, r) {
			var n = e == null ? 0 : e.length;
			if (!n) return -1;
			var i = r == null ? 0 : nq(r);
			return i < 0 && (i = iq(n + i, 0)), tq(e, rq(t, 3), i)
		}
		rh.exports = oq
	});
	var wa = l((mX, ih) => {
		var aq = _a(),
			sq = nh(),
			uq = aq(sq);
		ih.exports = uq
	});
	var sh = {};
	Ge(sh, {
		ELEMENT_MATCHES: () => cq,
		FLEX_PREFIXED: () => xa,
		IS_BROWSER_ENV: () => Je,
		TRANSFORM_PREFIXED: () => Ot,
		TRANSFORM_STYLE_PREFIXED: () => ti,
		withBrowser: () => ei
	});
	var ah, Je, ei, cq, xa, Ot, oh, ti, ri = me(() => {
		"use strict";
		ah = de(wa()), Je = typeof window < "u", ei = (e, t) => Je ? e() : t, cq = ei(() => (0, ah.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), xa = ei(() => {
			let e = document.createElement("i"),
				t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
				r = "";
			try {
				let {
					length: n
				} = t;
				for (let i = 0; i < n; i++) {
					let o = t[i];
					if (e.style.display = o, e.style.display === o) return o
				}
				return r
			} catch {
				return r
			}
		}, "flex"), Ot = ei(() => {
			let e = document.createElement("i");
			if (e.style.transform == null) {
				let t = ["Webkit", "Moz", "ms"],
					r = "Transform",
					{
						length: n
					} = t;
				for (let i = 0; i < n; i++) {
					let o = t[i] + r;
					if (e.style[o] !== void 0) return o
				}
			}
			return "transform"
		}, "transform"), oh = Ot.split("transform")[0], ti = oh ? oh + "TransformStyle" : "transformStyle"
	});
	var Oa = l((yX, dh) => {
		var lq = 4,
			fq = .001,
			dq = 1e-7,
			pq = 10,
			Xr = 11,
			ni = 1 / (Xr - 1),
			vq = typeof Float32Array == "function";

		function uh(e, t) {
			return 1 - 3 * t + 3 * e
		}

		function ch(e, t) {
			return 3 * t - 6 * e
		}

		function lh(e) {
			return 3 * e
		}

		function ii(e, t, r) {
			return ((uh(t, r) * e + ch(t, r)) * e + lh(t)) * e
		}

		function fh(e, t, r) {
			return 3 * uh(t, r) * e * e + 2 * ch(t, r) * e + lh(t)
		}

		function gq(e, t, r, n, i) {
			var o, a, s = 0;
			do a = t + (r - t) / 2, o = ii(a, n, i) - e, o > 0 ? r = a : t = a; while (Math.abs(o) > dq && ++s < pq);
			return a
		}

		function hq(e, t, r, n) {
			for (var i = 0; i < lq; ++i) {
				var o = fh(t, r, n);
				if (o === 0) return t;
				var a = ii(t, r, n) - e;
				t -= a / o
			}
			return t
		}
		dh.exports = function(t, r, n, i) {
			if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
			var o = vq ? new Float32Array(Xr) : new Array(Xr);
			if (t !== r || n !== i)
				for (var a = 0; a < Xr; ++a) o[a] = ii(a * ni, t, n);

			function s(u) {
				for (var f = 0, I = 1, p = Xr - 1; I !== p && o[I] <= u; ++I) f += ni;
				--I;
				var E = (u - o[I]) / (o[I + 1] - o[I]),
					m = f + E * ni,
					b = fh(m, t, n);
				return b >= fq ? hq(u, m, t, n) : b === 0 ? m : gq(u, f, f + ni, t, n)
			}
			return function(f) {
				return t === r && n === i ? f : f === 0 ? 0 : f === 1 ? 1 : ii(s(f), r, i)
			}
		}
	});
	var zr = {};
	Ge(zr, {
		bounce: () => Zq,
		bouncePast: () => Jq,
		ease: () => mq,
		easeIn: () => yq,
		easeInOut: () => bq,
		easeOut: () => Eq,
		inBack: () => Wq,
		inCirc: () => Gq,
		inCubic: () => wq,
		inElastic: () => jq,
		inExpo: () => Fq,
		inOutBack: () => Xq,
		inOutCirc: () => Vq,
		inOutCubic: () => Oq,
		inOutElastic: () => Kq,
		inOutExpo: () => kq,
		inOutQuad: () => Tq,
		inOutQuart: () => Cq,
		inOutQuint: () => Nq,
		inOutSine: () => Mq,
		inQuad: () => _q,
		inQuart: () => Aq,
		inQuint: () => Rq,
		inSine: () => Pq,
		outBack: () => Bq,
		outBounce: () => Hq,
		outCirc: () => Uq,
		outCubic: () => xq,
		outElastic: () => zq,
		outExpo: () => Dq,
		outQuad: () => Iq,
		outQuart: () => Sq,
		outQuint: () => Lq,
		outSine: () => qq,
		swingFrom: () => Qq,
		swingFromTo: () => Yq,
		swingTo: () => $q
	});

	function _q(e) {
		return Math.pow(e, 2)
	}

	function Iq(e) {
		return -(Math.pow(e - 1, 2) - 1)
	}

	function Tq(e) {
		return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
	}

	function wq(e) {
		return Math.pow(e, 3)
	}

	function xq(e) {
		return Math.pow(e - 1, 3) + 1
	}

	function Oq(e) {
		return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
	}

	function Aq(e) {
		return Math.pow(e, 4)
	}

	function Sq(e) {
		return -(Math.pow(e - 1, 4) - 1)
	}

	function Cq(e) {
		return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
	}

	function Rq(e) {
		return Math.pow(e, 5)
	}

	function Lq(e) {
		return Math.pow(e - 1, 5) + 1
	}

	function Nq(e) {
		return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
	}

	function Pq(e) {
		return -Math.cos(e * (Math.PI / 2)) + 1
	}

	function qq(e) {
		return Math.sin(e * (Math.PI / 2))
	}

	function Mq(e) {
		return -.5 * (Math.cos(Math.PI * e) - 1)
	}

	function Fq(e) {
		return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
	}

	function Dq(e) {
		return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
	}

	function kq(e) {
		return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
	}

	function Gq(e) {
		return -(Math.sqrt(1 - e * e) - 1)
	}

	function Uq(e) {
		return Math.sqrt(1 - Math.pow(e - 1, 2))
	}

	function Vq(e) {
		return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
	}

	function Hq(e) {
		return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
	}

	function Wq(e) {
		let t = gt;
		return e * e * ((t + 1) * e - t)
	}

	function Bq(e) {
		let t = gt;
		return (e -= 1) * e * ((t + 1) * e + t) + 1
	}

	function Xq(e) {
		let t = gt;
		return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
	}

	function jq(e) {
		let t = gt,
			r = 0,
			n = 1;
		return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
	}

	function zq(e) {
		let t = gt,
			r = 0,
			n = 1;
		return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
	}

	function Kq(e) {
		let t = gt,
			r = 0,
			n = 1;
		return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
	}

	function Yq(e) {
		let t = gt;
		return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
	}

	function Qq(e) {
		let t = gt;
		return e * e * ((t + 1) * e - t)
	}

	function $q(e) {
		let t = gt;
		return (e -= 1) * e * ((t + 1) * e + t) + 1
	}

	function Zq(e) {
		return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
	}

	function Jq(e) {
		return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
	}
	var jr, gt, mq, yq, Eq, bq, Aa = me(() => {
		"use strict";
		jr = de(Oa()), gt = 1.70158, mq = (0, jr.default)(.25, .1, .25, 1), yq = (0, jr.default)(.42, 0, 1, 1), Eq = (0, jr.default)(0, 0, .58, 1), bq = (0, jr.default)(.42, 0, .58, 1)
	});
	var vh = {};
	Ge(vh, {
		applyEasing: () => t1,
		createBezierEasing: () => e1,
		optimizeFloat: () => Kr
	});

	function Kr(e, t = 5, r = 10) {
		let n = Math.pow(r, t),
			i = Number(Math.round(e * n) / n);
		return Math.abs(i) > 1e-4 ? i : 0
	}

	function e1(e) {
		return (0, ph.default)(...e)
	}

	function t1(e, t, r) {
		return t === 0 ? 0 : t === 1 ? 1 : Kr(r ? t > 0 ? r(t) : t : t > 0 && e && zr[e] ? zr[e](t) : t)
	}
	var ph, Sa = me(() => {
		"use strict";
		Aa();
		ph = de(Oa())
	});
	var mh = {};
	Ge(mh, {
		createElementState: () => hh,
		ixElements: () => g1,
		mergeActionState: () => Ca
	});

	function hh(e, t, r, n, i) {
		let o = r === r1 ? (0, sr.getIn)(i, ["config", "target", "objectId"]) : null;
		return (0, sr.mergeIn)(e, [n], {
			id: n,
			ref: t,
			refId: o,
			refType: r
		})
	}

	function Ca(e, t, r, n, i) {
		let o = m1(i);
		return (0, sr.mergeIn)(e, [t, v1, r], n, o)
	}

	function m1(e) {
		let {
			config: t
		} = e;
		return h1.reduce((r, n) => {
			let i = n[0],
				o = n[1],
				a = t[i],
				s = t[o];
			return a != null && s != null && (r[o] = s), r
		}, {})
	}
	var sr, bX, r1, _X, n1, i1, o1, a1, s1, u1, c1, l1, f1, d1, p1, gh, v1, g1, h1, yh = me(() => {
		"use strict";
		sr = de(Zt());
		Ve();
		({
			HTML_ELEMENT: bX,
			PLAIN_OBJECT: r1,
			ABSTRACT_NODE: _X,
			CONFIG_X_VALUE: n1,
			CONFIG_Y_VALUE: i1,
			CONFIG_Z_VALUE: o1,
			CONFIG_VALUE: a1,
			CONFIG_X_UNIT: s1,
			CONFIG_Y_UNIT: u1,
			CONFIG_Z_UNIT: c1,
			CONFIG_UNIT: l1
		} = Le), {
			IX2_SESSION_STOPPED: f1,
			IX2_INSTANCE_ADDED: d1,
			IX2_ELEMENT_STATE_CHANGED: p1
		} = we, gh = {}, v1 = "refState", g1 = (e = gh, t = {}) => {
			switch (t.type) {
				case f1:
					return gh;
				case d1:
					{
						let {
							elementId: r,
							element: n,
							origin: i,
							actionItem: o,
							refType: a
						} = t.payload,
						{
							actionTypeId: s
						} = o,
						u = e;
						return (0, sr.getIn)(u, [r, n]) !== n && (u = hh(u, n, a, r, o)),
						Ca(u, r, s, i, o)
					}
				case p1:
					{
						let {
							elementId: r,
							actionTypeId: n,
							current: i,
							actionItem: o
						} = t.payload;
						return Ca(e, r, n, i, o)
					}
				default:
					return e
			}
		};
		h1 = [
			[n1, s1],
			[i1, u1],
			[o1, c1],
			[a1, l1]
		]
	});
	var Eh = l(Oe => {
		"use strict";
		Object.defineProperty(Oe, "__esModule", {
			value: !0
		});
		Oe.renderPlugin = Oe.getPluginOrigin = Oe.getPluginDuration = Oe.getPluginDestination = Oe.getPluginConfig = Oe.createPluginInstance = Oe.clearPlugin = void 0;
		var y1 = e => e.value;
		Oe.getPluginConfig = y1;
		var E1 = (e, t) => {
			if (t.config.duration !== "auto") return null;
			let r = parseFloat(e.getAttribute("data-duration"));
			return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
		};
		Oe.getPluginDuration = E1;
		var b1 = e => e || {
			value: 0
		};
		Oe.getPluginOrigin = b1;
		var _1 = e => ({
			value: e.value
		});
		Oe.getPluginDestination = _1;
		var I1 = e => {
			let t = window.Webflow.require("lottie").createInstance(e);
			return t.stop(), t.setSubframe(!0), t
		};
		Oe.createPluginInstance = I1;
		var T1 = (e, t, r) => {
			if (!e) return;
			let n = t[r.actionTypeId].value / 100;
			e.goToFrame(e.frames * n)
		};
		Oe.renderPlugin = T1;
		var w1 = e => {
			window.Webflow.require("lottie").createInstance(e).stop()
		};
		Oe.clearPlugin = w1
	});
	var _h = l(Ae => {
		"use strict";
		Object.defineProperty(Ae, "__esModule", {
			value: !0
		});
		Ae.renderPlugin = Ae.getPluginOrigin = Ae.getPluginDuration = Ae.getPluginDestination = Ae.getPluginConfig = Ae.createPluginInstance = Ae.clearPlugin = void 0;
		var x1 = e => document.querySelector(`[data-w-id="${e}"]`),
			O1 = () => window.Webflow.require("spline"),
			A1 = (e, t) => e.filter(r => !t.includes(r)),
			S1 = (e, t) => e.value[t];
		Ae.getPluginConfig = S1;
		var C1 = () => null;
		Ae.getPluginDuration = C1;
		var bh = Object.freeze({
				positionX: 0,
				positionY: 0,
				positionZ: 0,
				rotationX: 0,
				rotationY: 0,
				rotationZ: 0,
				scaleX: 1,
				scaleY: 1,
				scaleZ: 1
			}),
			R1 = (e, t) => {
				let r = t.config.value,
					n = Object.keys(r);
				if (e) {
					let o = Object.keys(e),
						a = A1(n, o);
					return a.length ? a.reduce((u, f) => (u[f] = bh[f], u), e) : e
				}
				return n.reduce((o, a) => (o[a] = bh[a], o), {})
			};
		Ae.getPluginOrigin = R1;
		var L1 = e => e.value;
		Ae.getPluginDestination = L1;
		var N1 = (e, t) => {
			var r;
			let n = t == null || (r = t.config) === null || r === void 0 || (r = r.target) === null || r === void 0 ? void 0 : r.pluginElement;
			return n ? x1(n) : null
		};
		Ae.createPluginInstance = N1;
		var P1 = (e, t, r) => {
			let n = O1(),
				i = n.getInstance(e),
				o = r.config.target.objectId,
				a = s => {
					if (!s) throw new Error("Invalid spline app passed to renderSpline");
					let u = o && s.findObjectById(o);
					if (!u) return;
					let {
						PLUGIN_SPLINE: f
					} = t;
					f.positionX != null && (u.position.x = f.positionX), f.positionY != null && (u.position.y = f.positionY), f.positionZ != null && (u.position.z = f.positionZ), f.rotationX != null && (u.rotation.x = f.rotationX), f.rotationY != null && (u.rotation.y = f.rotationY), f.rotationZ != null && (u.rotation.z = f.rotationZ), f.scaleX != null && (u.scale.x = f.scaleX), f.scaleY != null && (u.scale.y = f.scaleY), f.scaleZ != null && (u.scale.z = f.scaleZ)
				};
			i ? a(i.spline) : n.setLoadHandler(e, a)
		};
		Ae.renderPlugin = P1;
		var q1 = () => null;
		Ae.clearPlugin = q1
	});
	var La = l(Ra => {
		"use strict";
		Object.defineProperty(Ra, "__esModule", {
			value: !0
		});
		Ra.normalizeColor = M1;
		var Ih = {
			aliceblue: "#F0F8FF",
			antiquewhite: "#FAEBD7",
			aqua: "#00FFFF",
			aquamarine: "#7FFFD4",
			azure: "#F0FFFF",
			beige: "#F5F5DC",
			bisque: "#FFE4C4",
			black: "#000000",
			blanchedalmond: "#FFEBCD",
			blue: "#0000FF",
			blueviolet: "#8A2BE2",
			brown: "#A52A2A",
			burlywood: "#DEB887",
			cadetblue: "#5F9EA0",
			chartreuse: "#7FFF00",
			chocolate: "#D2691E",
			coral: "#FF7F50",
			cornflowerblue: "#6495ED",
			cornsilk: "#FFF8DC",
			crimson: "#DC143C",
			cyan: "#00FFFF",
			darkblue: "#00008B",
			darkcyan: "#008B8B",
			darkgoldenrod: "#B8860B",
			darkgray: "#A9A9A9",
			darkgreen: "#006400",
			darkgrey: "#A9A9A9",
			darkkhaki: "#BDB76B",
			darkmagenta: "#8B008B",
			darkolivegreen: "#556B2F",
			darkorange: "#FF8C00",
			darkorchid: "#9932CC",
			darkred: "#8B0000",
			darksalmon: "#E9967A",
			darkseagreen: "#8FBC8F",
			darkslateblue: "#483D8B",
			darkslategray: "#2F4F4F",
			darkslategrey: "#2F4F4F",
			darkturquoise: "#00CED1",
			darkviolet: "#9400D3",
			deeppink: "#FF1493",
			deepskyblue: "#00BFFF",
			dimgray: "#696969",
			dimgrey: "#696969",
			dodgerblue: "#1E90FF",
			firebrick: "#B22222",
			floralwhite: "#FFFAF0",
			forestgreen: "#228B22",
			fuchsia: "#FF00FF",
			gainsboro: "#DCDCDC",
			ghostwhite: "#F8F8FF",
			gold: "#FFD700",
			goldenrod: "#DAA520",
			gray: "#808080",
			green: "#008000",
			greenyellow: "#ADFF2F",
			grey: "#808080",
			honeydew: "#F0FFF0",
			hotpink: "#FF69B4",
			indianred: "#CD5C5C",
			indigo: "#4B0082",
			ivory: "#FFFFF0",
			khaki: "#F0E68C",
			lavender: "#E6E6FA",
			lavenderblush: "#FFF0F5",
			lawngreen: "#7CFC00",
			lemonchiffon: "#FFFACD",
			lightblue: "#ADD8E6",
			lightcoral: "#F08080",
			lightcyan: "#E0FFFF",
			lightgoldenrodyellow: "#FAFAD2",
			lightgray: "#D3D3D3",
			lightgreen: "#90EE90",
			lightgrey: "#D3D3D3",
			lightpink: "#FFB6C1",
			lightsalmon: "#FFA07A",
			lightseagreen: "#20B2AA",
			lightskyblue: "#87CEFA",
			lightslategray: "#778899",
			lightslategrey: "#778899",
			lightsteelblue: "#B0C4DE",
			lightyellow: "#FFFFE0",
			lime: "#00FF00",
			limegreen: "#32CD32",
			linen: "#FAF0E6",
			magenta: "#FF00FF",
			maroon: "#800000",
			mediumaquamarine: "#66CDAA",
			mediumblue: "#0000CD",
			mediumorchid: "#BA55D3",
			mediumpurple: "#9370DB",
			mediumseagreen: "#3CB371",
			mediumslateblue: "#7B68EE",
			mediumspringgreen: "#00FA9A",
			mediumturquoise: "#48D1CC",
			mediumvioletred: "#C71585",
			midnightblue: "#191970",
			mintcream: "#F5FFFA",
			mistyrose: "#FFE4E1",
			moccasin: "#FFE4B5",
			navajowhite: "#FFDEAD",
			navy: "#000080",
			oldlace: "#FDF5E6",
			olive: "#808000",
			olivedrab: "#6B8E23",
			orange: "#FFA500",
			orangered: "#FF4500",
			orchid: "#DA70D6",
			palegoldenrod: "#EEE8AA",
			palegreen: "#98FB98",
			paleturquoise: "#AFEEEE",
			palevioletred: "#DB7093",
			papayawhip: "#FFEFD5",
			peachpuff: "#FFDAB9",
			peru: "#CD853F",
			pink: "#FFC0CB",
			plum: "#DDA0DD",
			powderblue: "#B0E0E6",
			purple: "#800080",
			rebeccapurple: "#663399",
			red: "#FF0000",
			rosybrown: "#BC8F8F",
			royalblue: "#4169E1",
			saddlebrown: "#8B4513",
			salmon: "#FA8072",
			sandybrown: "#F4A460",
			seagreen: "#2E8B57",
			seashell: "#FFF5EE",
			sienna: "#A0522D",
			silver: "#C0C0C0",
			skyblue: "#87CEEB",
			slateblue: "#6A5ACD",
			slategray: "#708090",
			slategrey: "#708090",
			snow: "#FFFAFA",
			springgreen: "#00FF7F",
			steelblue: "#4682B4",
			tan: "#D2B48C",
			teal: "#008080",
			thistle: "#D8BFD8",
			tomato: "#FF6347",
			turquoise: "#40E0D0",
			violet: "#EE82EE",
			wheat: "#F5DEB3",
			white: "#FFFFFF",
			whitesmoke: "#F5F5F5",
			yellow: "#FFFF00",
			yellowgreen: "#9ACD32"
		};

		function M1(e) {
			let t, r, n, i = 1,
				o = e.replace(/\s/g, "").toLowerCase(),
				s = (typeof Ih[o] == "string" ? Ih[o].toLowerCase() : null) || o;
			if (s.startsWith("#")) {
				let u = s.substring(1);
				u.length === 3 ? (t = parseInt(u[0] + u[0], 16), r = parseInt(u[1] + u[1], 16), n = parseInt(u[2] + u[2], 16)) : u.length === 6 && (t = parseInt(u.substring(0, 2), 16), r = parseInt(u.substring(2, 4), 16), n = parseInt(u.substring(4, 6), 16))
			} else if (s.startsWith("rgba")) {
				let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
				t = parseInt(u[0], 10), r = parseInt(u[1], 10), n = parseInt(u[2], 10), i = parseFloat(u[3])
			} else if (s.startsWith("rgb")) {
				let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
				t = parseInt(u[0], 10), r = parseInt(u[1], 10), n = parseInt(u[2], 10)
			} else if (s.startsWith("hsla")) {
				let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
					f = parseFloat(u[0]),
					I = parseFloat(u[1].replace("%", "")) / 100,
					p = parseFloat(u[2].replace("%", "")) / 100;
				i = parseFloat(u[3]);
				let E = (1 - Math.abs(2 * p - 1)) * I,
					m = E * (1 - Math.abs(f / 60 % 2 - 1)),
					b = p - E / 2,
					T, O, x;
				f >= 0 && f < 60 ? (T = E, O = m, x = 0) : f >= 60 && f < 120 ? (T = m, O = E, x = 0) : f >= 120 && f < 180 ? (T = 0, O = E, x = m) : f >= 180 && f < 240 ? (T = 0, O = m, x = E) : f >= 240 && f < 300 ? (T = m, O = 0, x = E) : (T = E, O = 0, x = m), t = Math.round((T + b) * 255), r = Math.round((O + b) * 255), n = Math.round((x + b) * 255)
			} else if (s.startsWith("hsl")) {
				let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
					f = parseFloat(u[0]),
					I = parseFloat(u[1].replace("%", "")) / 100,
					p = parseFloat(u[2].replace("%", "")) / 100,
					E = (1 - Math.abs(2 * p - 1)) * I,
					m = E * (1 - Math.abs(f / 60 % 2 - 1)),
					b = p - E / 2,
					T, O, x;
				f >= 0 && f < 60 ? (T = E, O = m, x = 0) : f >= 60 && f < 120 ? (T = m, O = E, x = 0) : f >= 120 && f < 180 ? (T = 0, O = E, x = m) : f >= 180 && f < 240 ? (T = 0, O = m, x = E) : f >= 240 && f < 300 ? (T = m, O = 0, x = E) : (T = E, O = 0, x = m), t = Math.round((T + b) * 255), r = Math.round((O + b) * 255), n = Math.round((x + b) * 255)
			}
			if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
			return {
				red: t,
				green: r,
				blue: n,
				alpha: i
			}
		}
	});
	var Th = l(Se => {
		"use strict";
		Object.defineProperty(Se, "__esModule", {
			value: !0
		});
		Se.renderPlugin = Se.getPluginOrigin = Se.getPluginDuration = Se.getPluginDestination = Se.getPluginConfig = Se.createPluginInstance = Se.clearPlugin = void 0;
		var F1 = La(),
			D1 = (e, t) => e.value[t];
		Se.getPluginConfig = D1;
		var k1 = () => null;
		Se.getPluginDuration = k1;
		var G1 = (e, t) => {
			if (e) return e;
			let r = t.config.value,
				n = t.config.target.objectId,
				i = getComputedStyle(document.documentElement).getPropertyValue(n);
			if (r.size != null) return {
				size: parseInt(i, 10)
			};
			if (r.red != null && r.green != null && r.blue != null) return (0, F1.normalizeColor)(i)
		};
		Se.getPluginOrigin = G1;
		var U1 = e => e.value;
		Se.getPluginDestination = U1;
		var V1 = () => null;
		Se.createPluginInstance = V1;
		var H1 = (e, t, r) => {
			let n = r.config.target.objectId,
				i = r.config.value.unit,
				{
					PLUGIN_VARIABLE: o
				} = t,
				{
					size: a,
					red: s,
					green: u,
					blue: f,
					alpha: I
				} = o,
				p;
			a != null && (p = a + i), s != null && f != null && u != null && I != null && (p = `rgba(${s}, ${u}, ${f}, ${I})`), p != null && document.documentElement.style.setProperty(n, p)
		};
		Se.renderPlugin = H1;
		var W1 = (e, t) => {
			let r = t.config.target.objectId;
			document.documentElement.style.removeProperty(r)
		};
		Se.clearPlugin = W1
	});
	var wh = l(oi => {
		"use strict";
		var Pa = hn().default;
		Object.defineProperty(oi, "__esModule", {
			value: !0
		});
		oi.pluginMethodMap = void 0;
		var Na = (Ve(), nt(Rf)),
			B1 = Pa(Eh()),
			X1 = Pa(_h()),
			j1 = Pa(Th()),
			OX = oi.pluginMethodMap = new Map([
				[Na.ActionTypeConsts.PLUGIN_LOTTIE, { ...B1
				}],
				[Na.ActionTypeConsts.PLUGIN_SPLINE, { ...X1
				}],
				[Na.ActionTypeConsts.PLUGIN_VARIABLE, { ...j1
				}]
			])
	});
	var xh = {};
	Ge(xh, {
		clearPlugin: () => Ga,
		createPluginInstance: () => K1,
		getPluginConfig: () => Ma,
		getPluginDestination: () => Da,
		getPluginDuration: () => z1,
		getPluginOrigin: () => Fa,
		isPluginType: () => Dt,
		renderPlugin: () => ka
	});

	function Dt(e) {
		return qa.pluginMethodMap.has(e)
	}
	var qa, kt, Ma, Fa, z1, Da, K1, ka, Ga, Ua = me(() => {
		"use strict";
		ri();
		qa = de(wh());
		kt = e => t => {
			if (!Je) return () => null;
			let r = qa.pluginMethodMap.get(t);
			if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
			let n = r[e];
			if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
			return n
		}, Ma = kt("getPluginConfig"), Fa = kt("getPluginOrigin"), z1 = kt("getPluginDuration"), Da = kt("getPluginDestination"), K1 = kt("createPluginInstance"), ka = kt("renderPlugin"), Ga = kt("clearPlugin")
	});
	var Ah = l((CX, Oh) => {
		function Y1(e, t) {
			return e == null || e !== e ? t : e
		}
		Oh.exports = Y1
	});
	var Ch = l((RX, Sh) => {
		function Q1(e, t, r, n) {
			var i = -1,
				o = e == null ? 0 : e.length;
			for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
			return r
		}
		Sh.exports = Q1
	});
	var Lh = l((LX, Rh) => {
		function $1(e) {
			return function(t, r, n) {
				for (var i = -1, o = Object(t), a = n(t), s = a.length; s--;) {
					var u = a[e ? s : ++i];
					if (r(o[u], u, o) === !1) break
				}
				return t
			}
		}
		Rh.exports = $1
	});
	var Ph = l((NX, Nh) => {
		var Z1 = Lh(),
			J1 = Z1();
		Nh.exports = J1
	});
	var Va = l((PX, qh) => {
		var eM = Ph(),
			tM = Hr();

		function rM(e, t) {
			return e && eM(e, t, tM)
		}
		qh.exports = rM
	});
	var Fh = l((qX, Mh) => {
		var nM = Mt();

		function iM(e, t) {
			return function(r, n) {
				if (r == null) return r;
				if (!nM(r)) return e(r, n);
				for (var i = r.length, o = t ? i : -1, a = Object(r);
					(t ? o-- : ++o < i) && n(a[o], o, a) !== !1;);
				return r
			}
		}
		Mh.exports = iM
	});
	var Ha = l((MX, Dh) => {
		var oM = Va(),
			aM = Fh(),
			sM = aM(oM);
		Dh.exports = sM
	});
	var Gh = l((FX, kh) => {
		function uM(e, t, r, n, i) {
			return i(e, function(o, a, s) {
				r = n ? (n = !1, o) : t(r, o, a, s)
			}), r
		}
		kh.exports = uM
	});
	var Vh = l((DX, Uh) => {
		var cM = Ch(),
			lM = Ha(),
			fM = xt(),
			dM = Gh(),
			pM = xe();

		function vM(e, t, r) {
			var n = pM(e) ? cM : dM,
				i = arguments.length < 3;
			return n(e, fM(t, 4), r, i, lM)
		}
		Uh.exports = vM
	});
	var Wh = l((kX, Hh) => {
		var gM = Ia(),
			hM = xt(),
			mM = Ta(),
			yM = Math.max,
			EM = Math.min;

		function bM(e, t, r) {
			var n = e == null ? 0 : e.length;
			if (!n) return -1;
			var i = n - 1;
			return r !== void 0 && (i = mM(r), i = r < 0 ? yM(n + i, 0) : EM(i, n - 1)), gM(e, hM(t, 3), i, !0)
		}
		Hh.exports = bM
	});
	var Xh = l((GX, Bh) => {
		var _M = _a(),
			IM = Wh(),
			TM = _M(IM);
		Bh.exports = TM
	});

	function jh(e, t) {
		return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
	}

	function wM(e, t) {
		if (jh(e, t)) return !0;
		if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
		let r = Object.keys(e),
			n = Object.keys(t);
		if (r.length !== n.length) return !1;
		for (let i = 0; i < r.length; i++)
			if (!Object.hasOwn(t, r[i]) || !jh(e[r[i]], t[r[i]])) return !1;
		return !0
	}
	var Wa, zh = me(() => {
		"use strict";
		Wa = wM
	});
	var fm = {};
	Ge(fm, {
		cleanupHTMLElement: () => _F,
		clearAllStyles: () => bF,
		clearObjectCache: () => VM,
		getActionListProgress: () => TF,
		getAffectedElements: () => Ka,
		getComputedStyle: () => YM,
		getDestinationValues: () => rF,
		getElementId: () => XM,
		getInstanceId: () => WM,
		getInstanceOrigin: () => ZM,
		getItemConfigByKey: () => tF,
		getMaxDurationItemIndex: () => lm,
		getNamespacedParameterId: () => OF,
		getRenderType: () => sm,
		getStyleProp: () => nF,
		mediaQueriesEqual: () => SF,
		observeStore: () => KM,
		reduceListToGroup: () => wF,
		reifyState: () => jM,
		renderHTMLElement: () => iF,
		shallowEqual: () => Wa,
		shouldAllowMediaQuery: () => AF,
		shouldNamespaceEventParameter: () => xF,
		stringifyTarget: () => CF
	});

	function VM() {
		ai.clear()
	}

	function WM() {
		return "i" + HM++
	}

	function XM(e, t) {
		for (let r in e) {
			let n = e[r];
			if (n && n.ref === t) return n.id
		}
		return "e" + BM++
	}

	function jM({
		events: e,
		actionLists: t,
		site: r
	} = {}) {
		let n = (0, li.default)(e, (a, s) => {
				let {
					eventTypeId: u
				} = s;
				return a[u] || (a[u] = {}), a[u][s.id] = s, a
			}, {}),
			i = r && r.mediaQueries,
			o = [];
		return i ? o = i.map(a => a.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
			ixData: {
				events: e,
				actionLists: t,
				eventTypeMap: n,
				mediaQueries: i,
				mediaQueryKeys: o
			}
		}
	}

	function KM({
		store: e,
		select: t,
		onChange: r,
		comparator: n = zM
	}) {
		let {
			getState: i,
			subscribe: o
		} = e, a = o(u), s = t(i());

		function u() {
			let f = t(i());
			if (f == null) {
				a();
				return
			}
			n(f, s) || (s = f, r(s, e))
		}
		return a
	}

	function Qh(e) {
		let t = typeof e;
		if (t === "string") return {
			id: e
		};
		if (e != null && t === "object") {
			let {
				id: r,
				objectId: n,
				selector: i,
				selectorGuids: o,
				appliesTo: a,
				useEventTarget: s
			} = e;
			return {
				id: r,
				objectId: n,
				selector: i,
				selectorGuids: o,
				appliesTo: a,
				useEventTarget: s
			}
		}
		return {}
	}

	function Ka({
		config: e,
		event: t,
		eventTarget: r,
		elementRoot: n,
		elementApi: i
	}) {
		if (!i) throw new Error("IX2 missing elementApi");
		let {
			targets: o
		} = e;
		if (Array.isArray(o) && o.length > 0) return o.reduce((C, _) => C.concat(Ka({
			config: {
				target: _
			},
			event: t,
			eventTarget: r,
			elementRoot: n,
			elementApi: i
		})), []);
		let {
			getValidDocument: a,
			getQuerySelector: s,
			queryDocument: u,
			getChildElements: f,
			getSiblingElements: I,
			matchSelector: p,
			elementContains: E,
			isSiblingNode: m
		} = i, {
			target: b
		} = e;
		if (!b) return [];
		let {
			id: T,
			objectId: O,
			selector: x,
			selectorGuids: M,
			appliesTo: P,
			useEventTarget: V
		} = Qh(b);
		if (O) return [ai.has(O) ? ai.get(O) : ai.set(O, {}).get(O)];
		if (P === zo.PAGE) {
			let C = a(T);
			return C ? [C] : []
		}
		let D = (t?.action?.config?.affectedElements ?? {})[T || x] || {},
			$ = !!(D.id || D.selector),
			z, Y, te, j = t && s(Qh(t.target));
		if ($ ? (z = D.limitAffectedElements, Y = j, te = s(D)) : Y = te = s({
				id: T,
				selector: x,
				selectorGuids: M
			}), t && V) {
			let C = r && (te || V === !0) ? [r] : u(j);
			if (te) {
				if (V === kM) return u(te).filter(_ => C.some(L => E(_, L)));
				if (V === Kh) return u(te).filter(_ => C.some(L => E(L, _)));
				if (V === Yh) return u(te).filter(_ => C.some(L => m(L, _)))
			}
			return C
		}
		return Y == null || te == null ? [] : Je && n ? u(te).filter(C => n.contains(C)) : z === Kh ? u(Y, te) : z === DM ? f(u(Y)).filter(p(te)) : z === Yh ? I(u(Y)).filter(p(te)) : u(te)
	}

	function YM({
		element: e,
		actionItem: t
	}) {
		if (!Je) return {};
		let {
			actionTypeId: r
		} = t;
		switch (r) {
			case dr:
			case pr:
			case vr:
			case gr:
			case di:
				return window.getComputedStyle(e);
			default:
				return {}
		}
	}

	function ZM(e, t = {}, r = {}, n, i) {
		let {
			getStyle: o
		} = i, {
			actionTypeId: a
		} = n;
		if (Dt(a)) return Fa(a)(t[a], n);
		switch (n.actionTypeId) {
			case cr:
			case lr:
			case fr:
			case Zr:
				return t[n.actionTypeId] || Ya[n.actionTypeId];
			case Jr:
				return QM(t[n.actionTypeId], n.config.filters);
			case en:
				return $M(t[n.actionTypeId], n.config.fontVariations);
			case im:
				return {
					value: (0, ht.default)(parseFloat(o(e, ui)), 1)
				};
			case dr:
				{
					let s = o(e, ct),
						u = o(e, lt),
						f, I;
					return n.config.widthUnit === At ? f = $h.test(s) ? parseFloat(s) : parseFloat(r.width) : f = (0, ht.default)(parseFloat(s), parseFloat(r.width)),
					n.config.heightUnit === At ? I = $h.test(u) ? parseFloat(u) : parseFloat(r.height) : I = (0, ht.default)(parseFloat(u), parseFloat(r.height)),
					{
						widthValue: f,
						heightValue: I
					}
				}
			case pr:
			case vr:
			case gr:
				return mF({
					element: e,
					actionTypeId: n.actionTypeId,
					computedStyle: r,
					getStyle: o
				});
			case di:
				return {
					value: (0, ht.default)(o(e, ci), r.display)
				};
			case UM:
				return t[n.actionTypeId] || {
					value: 0
				};
			default:
				return
		}
	}

	function rF({
		element: e,
		actionItem: t,
		elementApi: r
	}) {
		if (Dt(t.actionTypeId)) return Da(t.actionTypeId)(t.config);
		switch (t.actionTypeId) {
			case cr:
			case lr:
			case fr:
			case Zr:
				{
					let {
						xValue: n,
						yValue: i,
						zValue: o
					} = t.config;
					return {
						xValue: n,
						yValue: i,
						zValue: o
					}
				}
			case dr:
				{
					let {
						getStyle: n,
						setStyle: i,
						getProperty: o
					} = r,
					{
						widthUnit: a,
						heightUnit: s
					} = t.config,
					{
						widthValue: u,
						heightValue: f
					} = t.config;
					if (!Je) return {
						widthValue: u,
						heightValue: f
					};
					if (a === At) {
						let I = n(e, ct);
						i(e, ct, ""), u = o(e, "offsetWidth"), i(e, ct, I)
					}
					if (s === At) {
						let I = n(e, lt);
						i(e, lt, ""), f = o(e, "offsetHeight"), i(e, lt, I)
					}
					return {
						widthValue: u,
						heightValue: f
					}
				}
			case pr:
			case vr:
			case gr:
				{
					let {
						rValue: n,
						gValue: i,
						bValue: o,
						aValue: a,
						globalSwatchId: s
					} = t.config;
					if (s && s.startsWith("--")) {
						let {
							getStyle: u
						} = r, f = u(e, s), I = (0, em.normalizeColor)(f);
						return {
							rValue: I.red,
							gValue: I.green,
							bValue: I.blue,
							aValue: I.alpha
						}
					}
					return {
						rValue: n,
						gValue: i,
						bValue: o,
						aValue: a
					}
				}
			case Jr:
				return t.config.filters.reduce(JM, {});
			case en:
				return t.config.fontVariations.reduce(eF, {});
			default:
				{
					let {
						value: n
					} = t.config;
					return {
						value: n
					}
				}
		}
	}

	function sm(e) {
		if (/^TRANSFORM_/.test(e)) return rm;
		if (/^STYLE_/.test(e)) return ja;
		if (/^GENERAL_/.test(e)) return Xa;
		if (/^PLUGIN_/.test(e)) return nm
	}

	function nF(e, t) {
		return e === ja ? t.replace("STYLE_", "").toLowerCase() : null
	}

	function iF(e, t, r, n, i, o, a, s, u) {
		switch (s) {
			case rm:
				return cF(e, t, r, i, a);
			case ja:
				return yF(e, t, r, i, o, a);
			case Xa:
				return EF(e, i, a);
			case nm:
				{
					let {
						actionTypeId: f
					} = i;
					if (Dt(f)) return ka(f)(u, t, i)
				}
		}
	}

	function cF(e, t, r, n, i) {
		let o = uF.map(s => {
				let u = Ya[s],
					{
						xValue: f = u.xValue,
						yValue: I = u.yValue,
						zValue: p = u.zValue,
						xUnit: E = "",
						yUnit: m = "",
						zUnit: b = ""
					} = t[s] || {};
				switch (s) {
					case cr:
						return `${AM}(${f}${E}, ${I}${m}, ${p}${b})`;
					case lr:
						return `${SM}(${f}${E}, ${I}${m}, ${p}${b})`;
					case fr:
						return `${CM}(${f}${E}) ${RM}(${I}${m}) ${LM}(${p}${b})`;
					case Zr:
						return `${NM}(${f}${E}, ${I}${m})`;
					default:
						return ""
				}
			}).join(" "),
			{
				setStyle: a
			} = i;
		Gt(e, Ot, i), a(e, Ot, o), dF(n, r) && a(e, ti, PM)
	}

	function lF(e, t, r, n) {
		let i = (0, li.default)(t, (a, s, u) => `${a} ${u}(${s}${sF(u,r)})`, ""),
			{
				setStyle: o
			} = n;
		Gt(e, Yr, n), o(e, Yr, i)
	}

	function fF(e, t, r, n) {
		let i = (0, li.default)(t, (a, s, u) => (a.push(`"${u}" ${s}`), a), []).join(", "),
			{
				setStyle: o
			} = n;
		Gt(e, Qr, n), o(e, Qr, i)
	}

	function dF({
		actionTypeId: e
	}, {
		xValue: t,
		yValue: r,
		zValue: n
	}) {
		return e === cr && n !== void 0 || e === lr && n !== void 0 || e === fr && (t !== void 0 || r !== void 0)
	}

	function hF(e, t) {
		let r = e.exec(t);
		return r ? r[1] : ""
	}

	function mF({
		element: e,
		actionTypeId: t,
		computedStyle: r,
		getStyle: n
	}) {
		let i = za[t],
			o = n(e, i),
			a = vF.test(o) ? o : r[i],
			s = hF(gF, a).split($r);
		return {
			rValue: (0, ht.default)(parseInt(s[0], 10), 255),
			gValue: (0, ht.default)(parseInt(s[1], 10), 255),
			bValue: (0, ht.default)(parseInt(s[2], 10), 255),
			aValue: (0, ht.default)(parseFloat(s[3]), 1)
		}
	}

	function yF(e, t, r, n, i, o) {
		let {
			setStyle: a
		} = o;
		switch (n.actionTypeId) {
			case dr:
				{
					let {
						widthUnit: s = "",
						heightUnit: u = ""
					} = n.config,
					{
						widthValue: f,
						heightValue: I
					} = r;f !== void 0 && (s === At && (s = "px"), Gt(e, ct, o), a(e, ct, f + s)),
					I !== void 0 && (u === At && (u = "px"), Gt(e, lt, o), a(e, lt, I + u));
					break
				}
			case Jr:
				{
					lF(e, r, n.config, o);
					break
				}
			case en:
				{
					fF(e, r, n.config, o);
					break
				}
			case pr:
			case vr:
			case gr:
				{
					let s = za[n.actionTypeId],
						u = Math.round(r.rValue),
						f = Math.round(r.gValue),
						I = Math.round(r.bValue),
						p = r.aValue;Gt(e, s, o),
					a(e, s, p >= 1 ? `rgb(${u},${f},${I})` : `rgba(${u},${f},${I},${p})`);
					break
				}
			default:
				{
					let {
						unit: s = ""
					} = n.config;Gt(e, i, o),
					a(e, i, r.value + s);
					break
				}
		}
	}

	function EF(e, t, r) {
		let {
			setStyle: n
		} = r;
		switch (t.actionTypeId) {
			case di:
				{
					let {
						value: i
					} = t.config;i === qM && Je ? n(e, ci, xa) : n(e, ci, i);
					return
				}
		}
	}

	function Gt(e, t, r) {
		if (!Je) return;
		let n = am[t];
		if (!n) return;
		let {
			getStyle: i,
			setStyle: o
		} = r, a = i(e, ur);
		if (!a) {
			o(e, ur, n);
			return
		}
		let s = a.split($r).map(om);
		s.indexOf(n) === -1 && o(e, ur, s.concat(n).join($r))
	}

	function um(e, t, r) {
		if (!Je) return;
		let n = am[t];
		if (!n) return;
		let {
			getStyle: i,
			setStyle: o
		} = r, a = i(e, ur);
		!a || a.indexOf(n) === -1 || o(e, ur, a.split($r).map(om).filter(s => s !== n).join($r))
	}

	function bF({
		store: e,
		elementApi: t
	}) {
		let {
			ixData: r
		} = e.getState(), {
			events: n = {},
			actionLists: i = {}
		} = r;
		Object.keys(n).forEach(o => {
			let a = n[o],
				{
					config: s
				} = a.action,
				{
					actionListId: u
				} = s,
				f = i[u];
			f && Zh({
				actionList: f,
				event: a,
				elementApi: t
			})
		}), Object.keys(i).forEach(o => {
			Zh({
				actionList: i[o],
				elementApi: t
			})
		})
	}

	function Zh({
		actionList: e = {},
		event: t,
		elementApi: r
	}) {
		let {
			actionItemGroups: n,
			continuousParameterGroups: i
		} = e;
		n && n.forEach(o => {
			Jh({
				actionGroup: o,
				event: t,
				elementApi: r
			})
		}), i && i.forEach(o => {
			let {
				continuousActionGroups: a
			} = o;
			a.forEach(s => {
				Jh({
					actionGroup: s,
					event: t,
					elementApi: r
				})
			})
		})
	}

	function Jh({
		actionGroup: e,
		event: t,
		elementApi: r
	}) {
		let {
			actionItems: n
		} = e;
		n.forEach(i => {
			let {
				actionTypeId: o,
				config: a
			} = i, s;
			Dt(o) ? s = u => Ga(o)(u, i) : s = cm({
				effect: IF,
				actionTypeId: o,
				elementApi: r
			}), Ka({
				config: a,
				event: t,
				elementApi: r
			}).forEach(s)
		})
	}

	function _F(e, t, r) {
		let {
			setStyle: n,
			getStyle: i
		} = r, {
			actionTypeId: o
		} = t;
		if (o === dr) {
			let {
				config: a
			} = t;
			a.widthUnit === At && n(e, ct, ""), a.heightUnit === At && n(e, lt, "")
		}
		i(e, ur) && cm({
			effect: um,
			actionTypeId: o,
			elementApi: r
		})(e)
	}

	function IF(e, t, r) {
		let {
			setStyle: n
		} = r;
		um(e, t, r), n(e, t, ""), t === Ot && n(e, ti, "")
	}

	function lm(e) {
		let t = 0,
			r = 0;
		return e.forEach((n, i) => {
			let {
				config: o
			} = n, a = o.delay + o.duration;
			a >= t && (t = a, r = i)
		}), r
	}

	function TF(e, t) {
		let {
			actionItemGroups: r,
			useFirstGroupAsInitialState: n
		} = e, {
			actionItem: i,
			verboseTimeElapsed: o = 0
		} = t, a = 0, s = 0;
		return r.forEach((u, f) => {
			if (n && f === 0) return;
			let {
				actionItems: I
			} = u, p = I[lm(I)], {
				config: E,
				actionTypeId: m
			} = p;
			i.id === p.id && (s = a + o);
			let b = sm(m) === Xa ? 0 : E.duration;
			a += E.delay + b
		}), a > 0 ? Kr(s / a) : 0
	}

	function wF({
		actionList: e,
		actionItemId: t,
		rawData: r
	}) {
		let {
			actionItemGroups: n,
			continuousParameterGroups: i
		} = e, o = [], a = s => (o.push((0, fi.mergeIn)(s, ["config"], {
			delay: 0,
			duration: 0
		})), s.id === t);
		return n && n.some(({
			actionItems: s
		}) => s.some(a)), i && i.some(s => {
			let {
				continuousActionGroups: u
			} = s;
			return u.some(({
				actionItems: f
			}) => f.some(a))
		}), (0, fi.setIn)(r, ["actionLists"], {
			[e.id]: {
				id: e.id,
				actionItemGroups: [{
					actionItems: o
				}]
			}
		})
	}

	function xF(e, {
		basedOn: t
	}) {
		return e === Ze.SCROLLING_IN_VIEW && (t === st.ELEMENT || t == null) || e === Ze.MOUSE_MOVE && t === st.ELEMENT
	}

	function OF(e, t) {
		return e + GM + t
	}

	function AF(e, t) {
		return t == null ? !0 : e.indexOf(t) !== -1
	}

	function SF(e, t) {
		return Wa(e && e.sort(), t && t.sort())
	}

	function CF(e) {
		if (typeof e == "string") return e;
		if (e.pluginElement && e.objectId) return e.pluginElement + Ba + e.objectId;
		if (e.objectId) return e.objectId;
		let {
			id: t = "",
			selector: r = "",
			useEventTarget: n = ""
		} = e;
		return t + Ba + r + Ba + n
	}
	var ht, li, si, fi, em, xM, OM, AM, SM, CM, RM, LM, NM, PM, qM, ui, Yr, Qr, ct, lt, tm, MM, FM, Kh, DM, Yh, kM, ci, ur, At, $r, GM, Ba, rm, Xa, ja, nm, cr, lr, fr, Zr, im, Jr, en, dr, pr, vr, gr, di, UM, om, za, am, ai, HM, BM, zM, $h, QM, $M, JM, eF, tF, Ya, oF, aF, sF, uF, pF, vF, gF, cm, dm = me(() => {
		"use strict";
		ht = de(Ah()), li = de(Vh()), si = de(Xh()), fi = de(Zt());
		Ve();
		zh();
		Sa();
		em = de(La());
		Ua();
		ri();
		({
			BACKGROUND: xM,
			TRANSFORM: OM,
			TRANSLATE_3D: AM,
			SCALE_3D: SM,
			ROTATE_X: CM,
			ROTATE_Y: RM,
			ROTATE_Z: LM,
			SKEW: NM,
			PRESERVE_3D: PM,
			FLEX: qM,
			OPACITY: ui,
			FILTER: Yr,
			FONT_VARIATION_SETTINGS: Qr,
			WIDTH: ct,
			HEIGHT: lt,
			BACKGROUND_COLOR: tm,
			BORDER_COLOR: MM,
			COLOR: FM,
			CHILDREN: Kh,
			IMMEDIATE_CHILDREN: DM,
			SIBLINGS: Yh,
			PARENT: kM,
			DISPLAY: ci,
			WILL_CHANGE: ur,
			AUTO: At,
			COMMA_DELIMITER: $r,
			COLON_DELIMITER: GM,
			BAR_DELIMITER: Ba,
			RENDER_TRANSFORM: rm,
			RENDER_GENERAL: Xa,
			RENDER_STYLE: ja,
			RENDER_PLUGIN: nm
		} = Le), {
			TRANSFORM_MOVE: cr,
			TRANSFORM_SCALE: lr,
			TRANSFORM_ROTATE: fr,
			TRANSFORM_SKEW: Zr,
			STYLE_OPACITY: im,
			STYLE_FILTER: Jr,
			STYLE_FONT_VARIATION: en,
			STYLE_SIZE: dr,
			STYLE_BACKGROUND_COLOR: pr,
			STYLE_BORDER: vr,
			STYLE_TEXT_COLOR: gr,
			GENERAL_DISPLAY: di,
			OBJECT_VALUE: UM
		} = Ue, om = e => e.trim(), za = Object.freeze({
			[pr]: tm,
			[vr]: MM,
			[gr]: FM
		}), am = Object.freeze({
			[Ot]: OM,
			[tm]: xM,
			[ui]: ui,
			[Yr]: Yr,
			[ct]: ct,
			[lt]: lt,
			[Qr]: Qr
		}), ai = new Map;
		HM = 1;
		BM = 1;
		zM = (e, t) => e === t;
		$h = /px/, QM = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = oF[n.type]), r), e || {}), $M = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = aF[n.type] || n.defaultValue || 0), r), e || {});
		JM = (e, t) => (t && (e[t.type] = t.value || 0), e), eF = (e, t) => (t && (e[t.type] = t.value || 0), e), tF = (e, t, r) => {
			if (Dt(e)) return Ma(e)(r, t);
			switch (e) {
				case Jr:
					{
						let n = (0, si.default)(r.filters, ({
							type: i
						}) => i === t);
						return n ? n.value : 0
					}
				case en:
					{
						let n = (0, si.default)(r.fontVariations, ({
							type: i
						}) => i === t);
						return n ? n.value : 0
					}
				default:
					return r[t]
			}
		};
		Ya = {
			[cr]: Object.freeze({
				xValue: 0,
				yValue: 0,
				zValue: 0
			}),
			[lr]: Object.freeze({
				xValue: 1,
				yValue: 1,
				zValue: 1
			}),
			[fr]: Object.freeze({
				xValue: 0,
				yValue: 0,
				zValue: 0
			}),
			[Zr]: Object.freeze({
				xValue: 0,
				yValue: 0
			})
		}, oF = Object.freeze({
			blur: 0,
			"hue-rotate": 0,
			invert: 0,
			grayscale: 0,
			saturate: 100,
			sepia: 0,
			contrast: 100,
			brightness: 100
		}), aF = Object.freeze({
			wght: 0,
			opsz: 0,
			wdth: 0,
			slnt: 0
		}), sF = (e, t) => {
			let r = (0, si.default)(t.filters, ({
				type: n
			}) => n === e);
			if (r && r.unit) return r.unit;
			switch (e) {
				case "blur":
					return "px";
				case "hue-rotate":
					return "deg";
				default:
					return "%"
			}
		}, uF = Object.keys(Ya);
		pF = "\\(([^)]+)\\)", vF = /^rgb/, gF = RegExp(`rgba?${pF}`);
		cm = ({
			effect: e,
			actionTypeId: t,
			elementApi: r
		}) => n => {
			switch (t) {
				case cr:
				case lr:
				case fr:
				case Zr:
					e(n, Ot, r);
					break;
				case Jr:
					e(n, Yr, r);
					break;
				case en:
					e(n, Qr, r);
					break;
				case im:
					e(n, ui, r);
					break;
				case dr:
					e(n, ct, r), e(n, lt, r);
					break;
				case pr:
				case vr:
				case gr:
					e(n, za[t], r);
					break;
				case di:
					e(n, ci, r);
					break
			}
		}
	});
	var Ut = l(Fe => {
		"use strict";
		var hr = hn().default;
		Object.defineProperty(Fe, "__esModule", {
			value: !0
		});
		Fe.IX2VanillaUtils = Fe.IX2VanillaPlugins = Fe.IX2ElementsReducer = Fe.IX2Easings = Fe.IX2EasingUtils = Fe.IX2BrowserSupport = void 0;
		var RF = hr((ri(), nt(sh)));
		Fe.IX2BrowserSupport = RF;
		var LF = hr((Aa(), nt(zr)));
		Fe.IX2Easings = LF;
		var NF = hr((Sa(), nt(vh)));
		Fe.IX2EasingUtils = NF;
		var PF = hr((yh(), nt(mh)));
		Fe.IX2ElementsReducer = PF;
		var qF = hr((Ua(), nt(xh)));
		Fe.IX2VanillaPlugins = qF;
		var MF = hr((dm(), nt(fm)));
		Fe.IX2VanillaUtils = MF
	});
	var vi, mt, FF, DF, kF, GF, UF, VF, pi, pm, HF, WF, Qa, BF, XF, jF, zF, vm, gm = me(() => {
		"use strict";
		Ve();
		vi = de(Ut()), mt = de(Zt()), {
			IX2_RAW_DATA_IMPORTED: FF,
			IX2_SESSION_STOPPED: DF,
			IX2_INSTANCE_ADDED: kF,
			IX2_INSTANCE_STARTED: GF,
			IX2_INSTANCE_REMOVED: UF,
			IX2_ANIMATION_FRAME_CHANGED: VF
		} = we, {
			optimizeFloat: pi,
			applyEasing: pm,
			createBezierEasing: HF
		} = vi.IX2EasingUtils, {
			RENDER_GENERAL: WF
		} = Le, {
			getItemConfigByKey: Qa,
			getRenderType: BF,
			getStyleProp: XF
		} = vi.IX2VanillaUtils, jF = (e, t) => {
			let {
				position: r,
				parameterId: n,
				actionGroups: i,
				destinationKeys: o,
				smoothing: a,
				restingValue: s,
				actionTypeId: u,
				customEasingFn: f,
				skipMotion: I,
				skipToValue: p
			} = e, {
				parameters: E
			} = t.payload, m = Math.max(1 - a, .01), b = E[n];
			b == null && (m = 1, b = s);
			let T = Math.max(b, 0) || 0,
				O = pi(T - r),
				x = I ? p : pi(r + O * m),
				M = x * 100;
			if (x === r && e.current) return e;
			let P, V, W, D;
			for (let z = 0, {
					length: Y
				} = i; z < Y; z++) {
				let {
					keyframe: te,
					actionItems: j
				} = i[z];
				if (z === 0 && (P = j[0]), M >= te) {
					P = j[0];
					let C = i[z + 1],
						_ = C && M !== te;
					V = _ ? C.actionItems[0] : null, _ && (W = te / 100, D = (C.keyframe - te) / 100)
				}
			}
			let $ = {};
			if (P && !V)
				for (let z = 0, {
						length: Y
					} = o; z < Y; z++) {
					let te = o[z];
					$[te] = Qa(u, te, P.config)
				} else if (P && V && W !== void 0 && D !== void 0) {
					let z = (x - W) / D,
						Y = P.config.easing,
						te = pm(Y, z, f);
					for (let j = 0, {
							length: C
						} = o; j < C; j++) {
						let _ = o[j],
							L = Qa(u, _, P.config),
							ee = (Qa(u, _, V.config) - L) * te + L;
						$[_] = ee
					}
				}
			return (0, mt.merge)(e, {
				position: x,
				current: $
			})
		}, zF = (e, t) => {
			let {
				active: r,
				origin: n,
				start: i,
				immediate: o,
				renderType: a,
				verbose: s,
				actionItem: u,
				destination: f,
				destinationKeys: I,
				pluginDuration: p,
				instanceDelay: E,
				customEasingFn: m,
				skipMotion: b
			} = e, T = u.config.easing, {
				duration: O,
				delay: x
			} = u.config;
			p != null && (O = p), x = E ?? x, a === WF ? O = 0 : (o || b) && (O = x = 0);
			let {
				now: M
			} = t.payload;
			if (r && n) {
				let P = M - (i + x);
				if (s) {
					let z = M - i,
						Y = O + x,
						te = pi(Math.min(Math.max(0, z / Y), 1));
					e = (0, mt.set)(e, "verboseTimeElapsed", Y * te)
				}
				if (P < 0) return e;
				let V = pi(Math.min(Math.max(0, P / O), 1)),
					W = pm(T, V, m),
					D = {},
					$ = null;
				return I.length && ($ = I.reduce((z, Y) => {
					let te = f[Y],
						j = parseFloat(n[Y]) || 0,
						_ = (parseFloat(te) - j) * W + j;
					return z[Y] = _, z
				}, {})), D.current = $, D.position = V, V === 1 && (D.active = !1, D.complete = !0), (0, mt.merge)(e, D)
			}
			return e
		}, vm = (e = Object.freeze({}), t) => {
			switch (t.type) {
				case FF:
					return t.payload.ixInstances || Object.freeze({});
				case DF:
					return Object.freeze({});
				case kF:
					{
						let {
							instanceId: r,
							elementId: n,
							actionItem: i,
							eventId: o,
							eventTarget: a,
							eventStateKey: s,
							actionListId: u,
							groupIndex: f,
							isCarrier: I,
							origin: p,
							destination: E,
							immediate: m,
							verbose: b,
							continuous: T,
							parameterId: O,
							actionGroups: x,
							smoothing: M,
							restingValue: P,
							pluginInstance: V,
							pluginDuration: W,
							instanceDelay: D,
							skipMotion: $,
							skipToValue: z
						} = t.payload,
						{
							actionTypeId: Y
						} = i,
						te = BF(Y),
						j = XF(te, Y),
						C = Object.keys(E).filter(L => E[L] != null && typeof E[L] != "string"),
						{
							easing: _
						} = i.config;
						return (0, mt.set)(e, r, {
							id: r,
							elementId: n,
							active: !1,
							position: 0,
							start: 0,
							origin: p,
							destination: E,
							destinationKeys: C,
							immediate: m,
							verbose: b,
							current: null,
							actionItem: i,
							actionTypeId: Y,
							eventId: o,
							eventTarget: a,
							eventStateKey: s,
							actionListId: u,
							groupIndex: f,
							renderType: te,
							isCarrier: I,
							styleProp: j,
							continuous: T,
							parameterId: O,
							actionGroups: x,
							smoothing: M,
							restingValue: P,
							pluginInstance: V,
							pluginDuration: W,
							instanceDelay: D,
							skipMotion: $,
							skipToValue: z,
							customEasingFn: Array.isArray(_) && _.length === 4 ? HF(_) : void 0
						})
					}
				case GF:
					{
						let {
							instanceId: r,
							time: n
						} = t.payload;
						return (0, mt.mergeIn)(e, [r], {
							active: !0,
							complete: !1,
							start: n
						})
					}
				case UF:
					{
						let {
							instanceId: r
						} = t.payload;
						if (!e[r]) return e;
						let n = {},
							i = Object.keys(e),
							{
								length: o
							} = i;
						for (let a = 0; a < o; a++) {
							let s = i[a];
							s !== r && (n[s] = e[s])
						}
						return n
					}
				case VF:
					{
						let r = e,
							n = Object.keys(e),
							{
								length: i
							} = n;
						for (let o = 0; o < i; o++) {
							let a = n[o],
								s = e[a],
								u = s.continuous ? jF : zF;
							r = (0, mt.set)(r, a, u(s, t))
						}
						return r
					}
				default:
					return e
			}
		}
	});
	var KF, YF, QF, hm, mm = me(() => {
		"use strict";
		Ve();
		({
			IX2_RAW_DATA_IMPORTED: KF,
			IX2_SESSION_STOPPED: YF,
			IX2_PARAMETER_CHANGED: QF
		} = we), hm = (e = {}, t) => {
			switch (t.type) {
				case KF:
					return t.payload.ixParameters || {};
				case YF:
					return {};
				case QF:
					{
						let {
							key: r,
							value: n
						} = t.payload;
						return e[r] = n,
						e
					}
				default:
					return e
			}
		}
	});
	var bm = {};
	Ge(bm, {
		default: () => ZF
	});
	var ym, Em, $F, ZF, _m = me(() => {
		"use strict";
		ym = de(jo());
		Nf();
		Jf();
		rd();
		Em = de(Ut());
		gm();
		mm();
		({
			ixElements: $F
		} = Em.IX2ElementsReducer), ZF = (0, ym.combineReducers)({
			ixData: Lf,
			ixRequest: Zf,
			ixSession: td,
			ixElements: $F,
			ixInstances: vm,
			ixParameters: hm
		})
	});
	var Tm = l((rj, Im) => {
		var JF = Tt(),
			eD = xe(),
			tD = vt(),
			rD = "[object String]";

		function nD(e) {
			return typeof e == "string" || !eD(e) && tD(e) && JF(e) == rD
		}
		Im.exports = nD
	});
	var xm = l((nj, wm) => {
		var iD = ba(),
			oD = iD("length");
		wm.exports = oD
	});
	var Am = l((ij, Om) => {
		var aD = "\\ud800-\\udfff",
			sD = "\\u0300-\\u036f",
			uD = "\\ufe20-\\ufe2f",
			cD = "\\u20d0-\\u20ff",
			lD = sD + uD + cD,
			fD = "\\ufe0e\\ufe0f",
			dD = "\\u200d",
			pD = RegExp("[" + dD + aD + lD + fD + "]");

		function vD(e) {
			return pD.test(e)
		}
		Om.exports = vD
	});
	var Fm = l((oj, Mm) => {
		var Cm = "\\ud800-\\udfff",
			gD = "\\u0300-\\u036f",
			hD = "\\ufe20-\\ufe2f",
			mD = "\\u20d0-\\u20ff",
			yD = gD + hD + mD,
			ED = "\\ufe0e\\ufe0f",
			bD = "[" + Cm + "]",
			$a = "[" + yD + "]",
			Za = "\\ud83c[\\udffb-\\udfff]",
			_D = "(?:" + $a + "|" + Za + ")",
			Rm = "[^" + Cm + "]",
			Lm = "(?:\\ud83c[\\udde6-\\uddff]){2}",
			Nm = "[\\ud800-\\udbff][\\udc00-\\udfff]",
			ID = "\\u200d",
			Pm = _D + "?",
			qm = "[" + ED + "]?",
			TD = "(?:" + ID + "(?:" + [Rm, Lm, Nm].join("|") + ")" + qm + Pm + ")*",
			wD = qm + Pm + TD,
			xD = "(?:" + [Rm + $a + "?", $a, Lm, Nm, bD].join("|") + ")",
			Sm = RegExp(Za + "(?=" + Za + ")|" + xD + wD, "g");

		function OD(e) {
			for (var t = Sm.lastIndex = 0; Sm.test(e);) ++t;
			return t
		}
		Mm.exports = OD
	});
	var km = l((aj, Dm) => {
		var AD = xm(),
			SD = Am(),
			CD = Fm();

		function RD(e) {
			return SD(e) ? CD(e) : AD(e)
		}
		Dm.exports = RD
	});
	var Um = l((sj, Gm) => {
		var LD = jn(),
			ND = zn(),
			PD = Mt(),
			qD = Tm(),
			MD = km(),
			FD = "[object Map]",
			DD = "[object Set]";

		function kD(e) {
			if (e == null) return 0;
			if (PD(e)) return qD(e) ? MD(e) : e.length;
			var t = ND(e);
			return t == FD || t == DD ? e.size : LD(e).length
		}
		Gm.exports = kD
	});
	var Hm = l((uj, Vm) => {
		var GD = "Expected a function";

		function UD(e) {
			if (typeof e != "function") throw new TypeError(GD);
			return function() {
				var t = arguments;
				switch (t.length) {
					case 0:
						return !e.call(this);
					case 1:
						return !e.call(this, t[0]);
					case 2:
						return !e.call(this, t[0], t[1]);
					case 3:
						return !e.call(this, t[0], t[1], t[2])
				}
				return !e.apply(this, t)
			}
		}
		Vm.exports = UD
	});
	var Ja = l((cj, Wm) => {
		var VD = wt(),
			HD = function() {
				try {
					var e = VD(Object, "defineProperty");
					return e({}, "", {}), e
				} catch {}
			}();
		Wm.exports = HD
	});
	var es = l((lj, Xm) => {
		var Bm = Ja();

		function WD(e, t, r) {
			t == "__proto__" && Bm ? Bm(e, t, {
				configurable: !0,
				enumerable: !0,
				value: r,
				writable: !0
			}) : e[t] = r
		}
		Xm.exports = WD
	});
	var zm = l((fj, jm) => {
		var BD = es(),
			XD = Fn(),
			jD = Object.prototype,
			zD = jD.hasOwnProperty;

		function KD(e, t, r) {
			var n = e[t];
			(!(zD.call(e, t) && XD(n, r)) || r === void 0 && !(t in e)) && BD(e, t, r)
		}
		jm.exports = KD
	});
	var Qm = l((dj, Ym) => {
		var YD = zm(),
			QD = Br(),
			$D = Hn(),
			Km = ut(),
			ZD = ar();

		function JD(e, t, r, n) {
			if (!Km(e)) return e;
			t = QD(t, e);
			for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o;) {
				var u = ZD(t[i]),
					f = r;
				if (u === "__proto__" || u === "constructor" || u === "prototype") return e;
				if (i != a) {
					var I = s[u];
					f = n ? n(I, u, s) : void 0, f === void 0 && (f = Km(I) ? I : $D(t[i + 1]) ? [] : {})
				}
				YD(s, u, f), s = s[u]
			}
			return e
		}
		Ym.exports = JD
	});
	var Zm = l((pj, $m) => {
		var e2 = Qn(),
			t2 = Qm(),
			r2 = Br();

		function n2(e, t, r) {
			for (var n = -1, i = t.length, o = {}; ++n < i;) {
				var a = t[n],
					s = e2(e, a);
				r(s, a) && t2(o, r2(a, e), s)
			}
			return o
		}
		$m.exports = n2
	});
	var ey = l((vj, Jm) => {
		var i2 = Un(),
			o2 = Po(),
			a2 = oa(),
			s2 = ia(),
			u2 = Object.getOwnPropertySymbols,
			c2 = u2 ? function(e) {
				for (var t = []; e;) i2(t, a2(e)), e = o2(e);
				return t
			} : s2;
		Jm.exports = c2
	});
	var ry = l((gj, ty) => {
		function l2(e) {
			var t = [];
			if (e != null)
				for (var r in Object(e)) t.push(r);
			return t
		}
		ty.exports = l2
	});
	var iy = l((hj, ny) => {
		var f2 = ut(),
			d2 = Xn(),
			p2 = ry(),
			v2 = Object.prototype,
			g2 = v2.hasOwnProperty;

		function h2(e) {
			if (!f2(e)) return p2(e);
			var t = d2(e),
				r = [];
			for (var n in e) n == "constructor" && (t || !g2.call(e, n)) || r.push(n);
			return r
		}
		ny.exports = h2
	});
	var ay = l((mj, oy) => {
		var m2 = sa(),
			y2 = iy(),
			E2 = Mt();

		function b2(e) {
			return E2(e) ? m2(e, !0) : y2(e)
		}
		oy.exports = b2
	});
	var uy = l((yj, sy) => {
		var _2 = na(),
			I2 = ey(),
			T2 = ay();

		function w2(e) {
			return _2(e, T2, I2)
		}
		sy.exports = w2
	});
	var ly = l((Ej, cy) => {
		var x2 = Ea(),
			O2 = xt(),
			A2 = Zm(),
			S2 = uy();

		function C2(e, t) {
			if (e == null) return {};
			var r = x2(S2(e), function(n) {
				return [n]
			});
			return t = O2(t), A2(e, r, function(n, i) {
				return t(n, i[0])
			})
		}
		cy.exports = C2
	});
	var dy = l((bj, fy) => {
		var R2 = xt(),
			L2 = Hm(),
			N2 = ly();

		function P2(e, t) {
			return N2(e, L2(R2(t)))
		}
		fy.exports = P2
	});
	var vy = l((_j, py) => {
		var q2 = jn(),
			M2 = zn(),
			F2 = kr(),
			D2 = xe(),
			k2 = Mt(),
			G2 = Vn(),
			U2 = Xn(),
			V2 = Bn(),
			H2 = "[object Map]",
			W2 = "[object Set]",
			B2 = Object.prototype,
			X2 = B2.hasOwnProperty;

		function j2(e) {
			if (e == null) return !0;
			if (k2(e) && (D2(e) || typeof e == "string" || typeof e.splice == "function" || G2(e) || V2(e) || F2(e))) return !e.length;
			var t = M2(e);
			if (t == H2 || t == W2) return !e.size;
			if (U2(e)) return !q2(e).length;
			for (var r in e)
				if (X2.call(e, r)) return !1;
			return !0
		}
		py.exports = j2
	});
	var hy = l((Ij, gy) => {
		var z2 = es(),
			K2 = Va(),
			Y2 = xt();

		function Q2(e, t) {
			var r = {};
			return t = Y2(t, 3), K2(e, function(n, i, o) {
				z2(r, i, t(n, i, o))
			}), r
		}
		gy.exports = Q2
	});
	var yy = l((Tj, my) => {
		function $2(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
			return e
		}
		my.exports = $2
	});
	var by = l((wj, Ey) => {
		var Z2 = Zn();

		function J2(e) {
			return typeof e == "function" ? e : Z2
		}
		Ey.exports = J2
	});
	var Iy = l((xj, _y) => {
		var ek = yy(),
			tk = Ha(),
			rk = by(),
			nk = xe();

		function ik(e, t) {
			var r = nk(e) ? ek : tk;
			return r(e, rk(t))
		}
		_y.exports = ik
	});
	var wy = l((Oj, Ty) => {
		var ok = $e(),
			ak = function() {
				return ok.Date.now()
			};
		Ty.exports = ak
	});
	var Ay = l((Aj, Oy) => {
		var sk = ut(),
			ts = wy(),
			xy = Jn(),
			uk = "Expected a function",
			ck = Math.max,
			lk = Math.min;

		function fk(e, t, r) {
			var n, i, o, a, s, u, f = 0,
				I = !1,
				p = !1,
				E = !0;
			if (typeof e != "function") throw new TypeError(uk);
			t = xy(t) || 0, sk(r) && (I = !!r.leading, p = "maxWait" in r, o = p ? ck(xy(r.maxWait) || 0, t) : o, E = "trailing" in r ? !!r.trailing : E);

			function m(D) {
				var $ = n,
					z = i;
				return n = i = void 0, f = D, a = e.apply(z, $), a
			}

			function b(D) {
				return f = D, s = setTimeout(x, t), I ? m(D) : a
			}

			function T(D) {
				var $ = D - u,
					z = D - f,
					Y = t - $;
				return p ? lk(Y, o - z) : Y
			}

			function O(D) {
				var $ = D - u,
					z = D - f;
				return u === void 0 || $ >= t || $ < 0 || p && z >= o
			}

			function x() {
				var D = ts();
				if (O(D)) return M(D);
				s = setTimeout(x, T(D))
			}

			function M(D) {
				return s = void 0, E && n ? m(D) : (n = i = void 0, a)
			}

			function P() {
				s !== void 0 && clearTimeout(s), f = 0, n = u = i = s = void 0
			}

			function V() {
				return s === void 0 ? a : M(ts())
			}

			function W() {
				var D = ts(),
					$ = O(D);
				if (n = arguments, i = this, u = D, $) {
					if (s === void 0) return b(u);
					if (p) return clearTimeout(s), s = setTimeout(x, t), m(u)
				}
				return s === void 0 && (s = setTimeout(x, t)), a
			}
			return W.cancel = P, W.flush = V, W
		}
		Oy.exports = fk
	});
	var Cy = l((Sj, Sy) => {
		var dk = Ay(),
			pk = ut(),
			vk = "Expected a function";

		function gk(e, t, r) {
			var n = !0,
				i = !0;
			if (typeof e != "function") throw new TypeError(vk);
			return pk(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), dk(e, t, {
				leading: n,
				maxWait: t,
				trailing: i
			})
		}
		Sy.exports = gk
	});
	var Ly = {};
	Ge(Ly, {
		actionListPlaybackChanged: () => yr,
		animationFrameChanged: () => hi,
		clearRequested: () => Uk,
		elementStateChanged: () => cs,
		eventListenerAdded: () => gi,
		eventStateChanged: () => as,
		instanceAdded: () => ss,
		instanceRemoved: () => us,
		instanceStarted: () => mi,
		mediaQueriesDefined: () => fs,
		parameterChanged: () => mr,
		playbackRequested: () => kk,
		previewRequested: () => Dk,
		rawDataImported: () => rs,
		sessionInitialized: () => ns,
		sessionStarted: () => is,
		sessionStopped: () => os,
		stopRequested: () => Gk,
		testFrameRendered: () => Vk,
		viewportWidthChanged: () => ls
	});
	var Ry, hk, mk, yk, Ek, bk, _k, Ik, Tk, wk, xk, Ok, Ak, Sk, Ck, Rk, Lk, Nk, Pk, qk, Mk, Fk, rs, ns, is, os, Dk, kk, Gk, Uk, gi, Vk, as, hi, mr, ss, mi, us, cs, yr, ls, fs, yi = me(() => {
		"use strict";
		Ve();
		Ry = de(Ut()), {
			IX2_RAW_DATA_IMPORTED: hk,
			IX2_SESSION_INITIALIZED: mk,
			IX2_SESSION_STARTED: yk,
			IX2_SESSION_STOPPED: Ek,
			IX2_PREVIEW_REQUESTED: bk,
			IX2_PLAYBACK_REQUESTED: _k,
			IX2_STOP_REQUESTED: Ik,
			IX2_CLEAR_REQUESTED: Tk,
			IX2_EVENT_LISTENER_ADDED: wk,
			IX2_TEST_FRAME_RENDERED: xk,
			IX2_EVENT_STATE_CHANGED: Ok,
			IX2_ANIMATION_FRAME_CHANGED: Ak,
			IX2_PARAMETER_CHANGED: Sk,
			IX2_INSTANCE_ADDED: Ck,
			IX2_INSTANCE_STARTED: Rk,
			IX2_INSTANCE_REMOVED: Lk,
			IX2_ELEMENT_STATE_CHANGED: Nk,
			IX2_ACTION_LIST_PLAYBACK_CHANGED: Pk,
			IX2_VIEWPORT_WIDTH_CHANGED: qk,
			IX2_MEDIA_QUERIES_DEFINED: Mk
		} = we, {
			reifyState: Fk
		} = Ry.IX2VanillaUtils, rs = e => ({
			type: hk,
			payload: { ...Fk(e)
			}
		}), ns = ({
			hasBoundaryNodes: e,
			reducedMotion: t
		}) => ({
			type: mk,
			payload: {
				hasBoundaryNodes: e,
				reducedMotion: t
			}
		}), is = () => ({
			type: yk
		}), os = () => ({
			type: Ek
		}), Dk = ({
			rawData: e,
			defer: t
		}) => ({
			type: bk,
			payload: {
				defer: t,
				rawData: e
			}
		}), kk = ({
			actionTypeId: e = Ue.GENERAL_START_ACTION,
			actionListId: t,
			actionItemId: r,
			eventId: n,
			allowEvents: i,
			immediate: o,
			testManual: a,
			verbose: s,
			rawData: u
		}) => ({
			type: _k,
			payload: {
				actionTypeId: e,
				actionListId: t,
				actionItemId: r,
				testManual: a,
				eventId: n,
				allowEvents: i,
				immediate: o,
				verbose: s,
				rawData: u
			}
		}), Gk = e => ({
			type: Ik,
			payload: {
				actionListId: e
			}
		}), Uk = () => ({
			type: Tk
		}), gi = (e, t) => ({
			type: wk,
			payload: {
				target: e,
				listenerParams: t
			}
		}), Vk = (e = 1) => ({
			type: xk,
			payload: {
				step: e
			}
		}), as = (e, t) => ({
			type: Ok,
			payload: {
				stateKey: e,
				newState: t
			}
		}), hi = (e, t) => ({
			type: Ak,
			payload: {
				now: e,
				parameters: t
			}
		}), mr = (e, t) => ({
			type: Sk,
			payload: {
				key: e,
				value: t
			}
		}), ss = e => ({
			type: Ck,
			payload: { ...e
			}
		}), mi = (e, t) => ({
			type: Rk,
			payload: {
				instanceId: e,
				time: t
			}
		}), us = e => ({
			type: Lk,
			payload: {
				instanceId: e
			}
		}), cs = (e, t, r, n) => ({
			type: Nk,
			payload: {
				elementId: e,
				actionTypeId: t,
				current: r,
				actionItem: n
			}
		}), yr = ({
			actionListId: e,
			isPlaying: t
		}) => ({
			type: Pk,
			payload: {
				actionListId: e,
				isPlaying: t
			}
		}), ls = ({
			width: e,
			mediaQueries: t
		}) => ({
			type: qk,
			payload: {
				width: e,
				mediaQueries: t
			}
		}), fs = () => ({
			type: Mk
		})
	});
	var De = {};
	Ge(De, {
		elementContains: () => vs,
		getChildElements: () => $k,
		getClosestElement: () => tn,
		getProperty: () => jk,
		getQuerySelector: () => ps,
		getRefType: () => gs,
		getSiblingElements: () => Zk,
		getStyle: () => Xk,
		getValidDocument: () => Kk,
		isSiblingNode: () => Qk,
		matchSelector: () => zk,
		queryDocument: () => Yk,
		setStyle: () => Bk
	});

	function Bk(e, t, r) {
		e.style[t] = r
	}

	function Xk(e, t) {
		return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
	}

	function jk(e, t) {
		return e[t]
	}

	function zk(e) {
		return t => t[ds](e)
	}

	function ps({
		id: e,
		selector: t
	}) {
		if (e) {
			let r = e;
			if (e.indexOf(Ny) !== -1) {
				let n = e.split(Ny),
					i = n[0];
				if (r = n[1], i !== document.documentElement.getAttribute(qy)) return null
			}
			return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
		}
		return t
	}

	function Kk(e) {
		return e == null || e === document.documentElement.getAttribute(qy) ? document : null
	}

	function Yk(e, t) {
		return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
	}

	function vs(e, t) {
		return e.contains(t)
	}

	function Qk(e, t) {
		return e !== t && e.parentNode === t.parentNode
	}

	function $k(e) {
		let t = [];
		for (let r = 0, {
				length: n
			} = e || []; r < n; r++) {
			let {
				children: i
			} = e[r], {
				length: o
			} = i;
			if (o)
				for (let a = 0; a < o; a++) t.push(i[a])
		}
		return t
	}

	function Zk(e = []) {
		let t = [],
			r = [];
		for (let n = 0, {
				length: i
			} = e; n < i; n++) {
			let {
				parentNode: o
			} = e[n];
			if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue;
			r.push(o);
			let a = o.firstElementChild;
			for (; a != null;) e.indexOf(a) === -1 && t.push(a), a = a.nextElementSibling
		}
		return t
	}

	function gs(e) {
		return e != null && typeof e == "object" ? e instanceof Element ? Hk : Wk : null
	}
	var Py, ds, Ny, Hk, Wk, qy, tn, My = me(() => {
		"use strict";
		Py = de(Ut());
		Ve();
		({
			ELEMENT_MATCHES: ds
		} = Py.IX2BrowserSupport), {
			IX2_ID_DELIMITER: Ny,
			HTML_ELEMENT: Hk,
			PLAIN_OBJECT: Wk,
			WF_PAGE: qy
		} = Le;
		tn = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
			if (!document.documentElement.contains(e)) return null;
			let r = e;
			do {
				if (r[ds] && r[ds](t)) return r;
				r = r.parentNode
			} while (r != null);
			return null
		}
	});
	var hs = l((Lj, Dy) => {
		var Jk = ut(),
			Fy = Object.create,
			eG = function() {
				function e() {}
				return function(t) {
					if (!Jk(t)) return {};
					if (Fy) return Fy(t);
					e.prototype = t;
					var r = new e;
					return e.prototype = void 0, r
				}
			}();
		Dy.exports = eG
	});
	var Ei = l((Nj, ky) => {
		function tG() {}
		ky.exports = tG
	});
	var _i = l((Pj, Gy) => {
		var rG = hs(),
			nG = Ei();

		function bi(e, t) {
			this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
		}
		bi.prototype = rG(nG.prototype);
		bi.prototype.constructor = bi;
		Gy.exports = bi
	});
	var Wy = l((qj, Hy) => {
		var Uy = Yt(),
			iG = kr(),
			oG = xe(),
			Vy = Uy ? Uy.isConcatSpreadable : void 0;

		function aG(e) {
			return oG(e) || iG(e) || !!(Vy && e && e[Vy])
		}
		Hy.exports = aG
	});
	var jy = l((Mj, Xy) => {
		var sG = Un(),
			uG = Wy();

		function By(e, t, r, n, i) {
			var o = -1,
				a = e.length;
			for (r || (r = uG), i || (i = []); ++o < a;) {
				var s = e[o];
				t > 0 && r(s) ? t > 1 ? By(s, t - 1, r, n, i) : sG(i, s) : n || (i[i.length] = s)
			}
			return i
		}
		Xy.exports = By
	});
	var Ky = l((Fj, zy) => {
		var cG = jy();

		function lG(e) {
			var t = e == null ? 0 : e.length;
			return t ? cG(e, 1) : []
		}
		zy.exports = lG
	});
	var Qy = l((Dj, Yy) => {
		function fG(e, t, r) {
			switch (r.length) {
				case 0:
					return e.call(t);
				case 1:
					return e.call(t, r[0]);
				case 2:
					return e.call(t, r[0], r[1]);
				case 3:
					return e.call(t, r[0], r[1], r[2])
			}
			return e.apply(t, r)
		}
		Yy.exports = fG
	});
	var Jy = l((kj, Zy) => {
		var dG = Qy(),
			$y = Math.max;

		function pG(e, t, r) {
			return t = $y(t === void 0 ? e.length - 1 : t, 0),
				function() {
					for (var n = arguments, i = -1, o = $y(n.length - t, 0), a = Array(o); ++i < o;) a[i] = n[t + i];
					i = -1;
					for (var s = Array(t + 1); ++i < t;) s[i] = n[i];
					return s[t] = r(a), dG(e, this, s)
				}
		}
		Zy.exports = pG
	});
	var tE = l((Gj, eE) => {
		function vG(e) {
			return function() {
				return e
			}
		}
		eE.exports = vG
	});
	var iE = l((Uj, nE) => {
		var gG = tE(),
			rE = Ja(),
			hG = Zn(),
			mG = rE ? function(e, t) {
				return rE(e, "toString", {
					configurable: !0,
					enumerable: !1,
					value: gG(t),
					writable: !0
				})
			} : hG;
		nE.exports = mG
	});
	var aE = l((Vj, oE) => {
		var yG = 800,
			EG = 16,
			bG = Date.now;

		function _G(e) {
			var t = 0,
				r = 0;
			return function() {
				var n = bG(),
					i = EG - (n - r);
				if (r = n, i > 0) {
					if (++t >= yG) return arguments[0]
				} else t = 0;
				return e.apply(void 0, arguments)
			}
		}
		oE.exports = _G
	});
	var uE = l((Hj, sE) => {
		var IG = iE(),
			TG = aE(),
			wG = TG(IG);
		sE.exports = wG
	});
	var lE = l((Wj, cE) => {
		var xG = Ky(),
			OG = Jy(),
			AG = uE();

		function SG(e) {
			return AG(OG(e, void 0, xG), e + "")
		}
		cE.exports = SG
	});
	var pE = l((Bj, dE) => {
		var fE = ua(),
			CG = fE && new fE;
		dE.exports = CG
	});
	var gE = l((Xj, vE) => {
		function RG() {}
		vE.exports = RG
	});
	var ms = l((jj, mE) => {
		var hE = pE(),
			LG = gE(),
			NG = hE ? function(e) {
				return hE.get(e)
			} : LG;
		mE.exports = NG
	});
	var EE = l((zj, yE) => {
		var PG = {};
		yE.exports = PG
	});
	var ys = l((Kj, _E) => {
		var bE = EE(),
			qG = Object.prototype,
			MG = qG.hasOwnProperty;

		function FG(e) {
			for (var t = e.name + "", r = bE[t], n = MG.call(bE, t) ? r.length : 0; n--;) {
				var i = r[n],
					o = i.func;
				if (o == null || o == e) return i.name
			}
			return t
		}
		_E.exports = FG
	});
	var Ti = l((Yj, IE) => {
		var DG = hs(),
			kG = Ei(),
			GG = 4294967295;

		function Ii(e) {
			this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = GG, this.__views__ = []
		}
		Ii.prototype = DG(kG.prototype);
		Ii.prototype.constructor = Ii;
		IE.exports = Ii
	});
	var wE = l((Qj, TE) => {
		function UG(e, t) {
			var r = -1,
				n = e.length;
			for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
			return t
		}
		TE.exports = UG
	});
	var OE = l(($j, xE) => {
		var VG = Ti(),
			HG = _i(),
			WG = wE();

		function BG(e) {
			if (e instanceof VG) return e.clone();
			var t = new HG(e.__wrapped__, e.__chain__);
			return t.__actions__ = WG(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
		}
		xE.exports = BG
	});
	var CE = l((Zj, SE) => {
		var XG = Ti(),
			AE = _i(),
			jG = Ei(),
			zG = xe(),
			KG = vt(),
			YG = OE(),
			QG = Object.prototype,
			$G = QG.hasOwnProperty;

		function wi(e) {
			if (KG(e) && !zG(e) && !(e instanceof XG)) {
				if (e instanceof AE) return e;
				if ($G.call(e, "__wrapped__")) return YG(e)
			}
			return new AE(e)
		}
		wi.prototype = jG.prototype;
		wi.prototype.constructor = wi;
		SE.exports = wi
	});
	var LE = l((Jj, RE) => {
		var ZG = Ti(),
			JG = ms(),
			eU = ys(),
			tU = CE();

		function rU(e) {
			var t = eU(e),
				r = tU[t];
			if (typeof r != "function" || !(t in ZG.prototype)) return !1;
			if (e === r) return !0;
			var n = JG(r);
			return !!n && e === n[0]
		}
		RE.exports = rU
	});
	var ME = l((ez, qE) => {
		var NE = _i(),
			nU = lE(),
			iU = ms(),
			Es = ys(),
			oU = xe(),
			PE = LE(),
			aU = "Expected a function",
			sU = 8,
			uU = 32,
			cU = 128,
			lU = 256;

		function fU(e) {
			return nU(function(t) {
				var r = t.length,
					n = r,
					i = NE.prototype.thru;
				for (e && t.reverse(); n--;) {
					var o = t[n];
					if (typeof o != "function") throw new TypeError(aU);
					if (i && !a && Es(o) == "wrapper") var a = new NE([], !0)
				}
				for (n = a ? n : r; ++n < r;) {
					o = t[n];
					var s = Es(o),
						u = s == "wrapper" ? iU(o) : void 0;
					u && PE(u[0]) && u[1] == (cU | sU | uU | lU) && !u[4].length && u[9] == 1 ? a = a[Es(u[0])].apply(a, u[3]) : a = o.length == 1 && PE(o) ? a[s]() : a.thru(o)
				}
				return function() {
					var f = arguments,
						I = f[0];
					if (a && f.length == 1 && oU(I)) return a.plant(I).value();
					for (var p = 0, E = r ? t[p].apply(this, f) : I; ++p < r;) E = t[p].call(this, E);
					return E
				}
			})
		}
		qE.exports = fU
	});
	var DE = l((tz, FE) => {
		var dU = ME(),
			pU = dU();
		FE.exports = pU
	});
	var GE = l((rz, kE) => {
		function vU(e, t, r) {
			return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
		}
		kE.exports = vU
	});
	var VE = l((nz, UE) => {
		var gU = GE(),
			bs = Jn();

		function hU(e, t, r) {
			return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = bs(r), r = r === r ? r : 0), t !== void 0 && (t = bs(t), t = t === t ? t : 0), gU(bs(e), t, r)
		}
		UE.exports = hU
	});
	var QE, $E, ZE, JE, mU, yU, EU, bU, _U, IU, TU, wU, xU, OU, AU, SU, CU, RU, LU, eb, tb, NU, PU, qU, rb, MU, FU, nb, DU, _s, ib, HE, WE, ob, nn, kU, ft, ab, GU, We, et, on, sb, Is, BE, Ts, UU, rn, VU, HU, WU, ub, XE, BU, jE, XU, jU, zU, zE, xi, Oi, KE, YE, cb, lb = me(() => {
		"use strict";
		QE = de(DE()), $E = de($n()), ZE = de(VE());
		Ve();
		ws();
		yi();
		JE = de(Ut()), {
			MOUSE_CLICK: mU,
			MOUSE_SECOND_CLICK: yU,
			MOUSE_DOWN: EU,
			MOUSE_UP: bU,
			MOUSE_OVER: _U,
			MOUSE_OUT: IU,
			DROPDOWN_CLOSE: TU,
			DROPDOWN_OPEN: wU,
			SLIDER_ACTIVE: xU,
			SLIDER_INACTIVE: OU,
			TAB_ACTIVE: AU,
			TAB_INACTIVE: SU,
			NAVBAR_CLOSE: CU,
			NAVBAR_OPEN: RU,
			MOUSE_MOVE: LU,
			PAGE_SCROLL_DOWN: eb,
			SCROLL_INTO_VIEW: tb,
			SCROLL_OUT_OF_VIEW: NU,
			PAGE_SCROLL_UP: PU,
			SCROLLING_IN_VIEW: qU,
			PAGE_FINISH: rb,
			ECOMMERCE_CART_CLOSE: MU,
			ECOMMERCE_CART_OPEN: FU,
			PAGE_START: nb,
			PAGE_SCROLL: DU
		} = Ze, _s = "COMPONENT_ACTIVE", ib = "COMPONENT_INACTIVE", {
			COLON_DELIMITER: HE
		} = Le, {
			getNamespacedParameterId: WE
		} = JE.IX2VanillaUtils, ob = e => t => typeof t == "object" && e(t) ? !0 : t, nn = ob(({
			element: e,
			nativeEvent: t
		}) => e === t.target), kU = ob(({
			element: e,
			nativeEvent: t
		}) => e.contains(t.target)), ft = (0, QE.default)([nn, kU]), ab = (e, t) => {
			if (t) {
				let {
					ixData: r
				} = e.getState(), {
					events: n
				} = r, i = n[t];
				if (i && !UU[i.eventTypeId]) return i
			}
			return null
		}, GU = ({
			store: e,
			event: t
		}) => {
			let {
				action: r
			} = t, {
				autoStopEventId: n
			} = r.config;
			return !!ab(e, n)
		}, We = ({
			store: e,
			event: t,
			element: r,
			eventStateKey: n
		}, i) => {
			let {
				action: o,
				id: a
			} = t, {
				actionListId: s,
				autoStopEventId: u
			} = o.config, f = ab(e, u);
			return f && Er({
				store: e,
				eventId: u,
				eventTarget: r,
				eventStateKey: u + HE + n.split(HE)[1],
				actionListId: (0, $E.default)(f, "action.config.actionListId")
			}), Er({
				store: e,
				eventId: a,
				eventTarget: r,
				eventStateKey: n,
				actionListId: s
			}), an({
				store: e,
				eventId: a,
				eventTarget: r,
				eventStateKey: n,
				actionListId: s
			}), i
		}, et = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n, on = {
			handler: et(ft, We)
		}, sb = { ...on,
			types: [_s, ib].join(" ")
		}, Is = [{
			target: window,
			types: "resize orientationchange",
			throttle: !0
		}, {
			target: document,
			types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
			throttle: !0
		}], BE = "mouseover mouseout", Ts = {
			types: Is
		}, UU = {
			PAGE_START: nb,
			PAGE_FINISH: rb
		}, rn = (() => {
			let e = window.pageXOffset !== void 0,
				r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
			return () => ({
				scrollLeft: e ? window.pageXOffset : r.scrollLeft,
				scrollTop: e ? window.pageYOffset : r.scrollTop,
				stiffScrollTop: (0, ZE.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
				scrollWidth: r.scrollWidth,
				scrollHeight: r.scrollHeight,
				clientWidth: r.clientWidth,
				clientHeight: r.clientHeight,
				innerWidth: window.innerWidth,
				innerHeight: window.innerHeight
			})
		})(), VU = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), HU = ({
			element: e,
			nativeEvent: t
		}) => {
			let {
				type: r,
				target: n,
				relatedTarget: i
			} = t, o = e.contains(n);
			if (r === "mouseover" && o) return !0;
			let a = e.contains(i);
			return !!(r === "mouseout" && o && a)
		}, WU = e => {
			let {
				element: t,
				event: {
					config: r
				}
			} = e, {
				clientWidth: n,
				clientHeight: i
			} = rn(), o = r.scrollOffsetValue, u = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
			return VU(t.getBoundingClientRect(), {
				left: 0,
				top: u,
				right: n,
				bottom: i - u
			})
		}, ub = e => (t, r) => {
			let {
				type: n
			} = t.nativeEvent, i = [_s, ib].indexOf(n) !== -1 ? n === _s : r.isActive, o = { ...r,
				isActive: i
			};
			return (!r || o.isActive !== r.isActive) && e(t, o) || o
		}, XE = e => (t, r) => {
			let n = {
				elementHovered: HU(t)
			};
			return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
		}, BU = e => (t, r) => {
			let n = { ...r,
				elementVisible: WU(t)
			};
			return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
		}, jE = e => (t, r = {}) => {
			let {
				stiffScrollTop: n,
				scrollHeight: i,
				innerHeight: o
			} = rn(), {
				event: {
					config: a,
					eventTypeId: s
				}
			} = t, {
				scrollOffsetValue: u,
				scrollOffsetUnit: f
			} = a, I = f === "PX", p = i - o, E = Number((n / p).toFixed(2));
			if (r && r.percentTop === E) return r;
			let m = (I ? u : o * (u || 0) / 100) / p,
				b, T, O = 0;
			r && (b = E > r.percentTop, T = r.scrollingDown !== b, O = T ? E : r.anchorTop);
			let x = s === eb ? E >= O + m : E <= O - m,
				M = { ...r,
					percentTop: E,
					inBounds: x,
					anchorTop: O,
					scrollingDown: b
				};
			return r && x && (T || M.inBounds !== r.inBounds) && e(t, M) || M
		}, XU = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, jU = e => (t, r) => {
			let n = {
				finished: document.readyState === "complete"
			};
			return n.finished && !(r && r.finshed) && e(t), n
		}, zU = e => (t, r) => {
			let n = {
				started: !0
			};
			return r || e(t), n
		}, zE = e => (t, r = {
			clickCount: 0
		}) => {
			let n = {
				clickCount: r.clickCount % 2 + 1
			};
			return n.clickCount !== r.clickCount && e(t, n) || n
		}, xi = (e = !0) => ({ ...sb,
			handler: et(e ? ft : nn, ub((t, r) => r.isActive ? on.handler(t, r) : r))
		}), Oi = (e = !0) => ({ ...sb,
			handler: et(e ? ft : nn, ub((t, r) => r.isActive ? r : on.handler(t, r)))
		}), KE = { ...Ts,
			handler: BU((e, t) => {
				let {
					elementVisible: r
				} = t, {
					event: n,
					store: i
				} = e, {
					ixData: o
				} = i.getState(), {
					events: a
				} = o;
				return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === tb === r ? (We(e), { ...t,
					triggered: !0
				}) : t
			})
		}, YE = .05, cb = {
			[xU]: xi(),
			[OU]: Oi(),
			[wU]: xi(),
			[TU]: Oi(),
			[RU]: xi(!1),
			[CU]: Oi(!1),
			[AU]: xi(),
			[SU]: Oi(),
			[FU]: {
				types: "ecommerce-cart-open",
				handler: et(ft, We)
			},
			[MU]: {
				types: "ecommerce-cart-close",
				handler: et(ft, We)
			},
			[mU]: {
				types: "click",
				handler: et(ft, zE((e, {
					clickCount: t
				}) => {
					GU(e) ? t === 1 && We(e) : We(e)
				}))
			},
			[yU]: {
				types: "click",
				handler: et(ft, zE((e, {
					clickCount: t
				}) => {
					t === 2 && We(e)
				}))
			},
			[EU]: { ...on,
				types: "mousedown"
			},
			[bU]: { ...on,
				types: "mouseup"
			},
			[_U]: {
				types: BE,
				handler: et(ft, XE((e, t) => {
					t.elementHovered && We(e)
				}))
			},
			[IU]: {
				types: BE,
				handler: et(ft, XE((e, t) => {
					t.elementHovered || We(e)
				}))
			},
			[LU]: {
				types: "mousemove mouseout scroll",
				handler: ({
					store: e,
					element: t,
					eventConfig: r,
					nativeEvent: n,
					eventStateKey: i
				}, o = {
					clientX: 0,
					clientY: 0,
					pageX: 0,
					pageY: 0
				}) => {
					let {
						basedOn: a,
						selectedAxis: s,
						continuousParameterGroupId: u,
						reverse: f,
						restingState: I = 0
					} = r, {
						clientX: p = o.clientX,
						clientY: E = o.clientY,
						pageX: m = o.pageX,
						pageY: b = o.pageY
					} = n, T = s === "X_AXIS", O = n.type === "mouseout", x = I / 100, M = u, P = !1;
					switch (a) {
						case st.VIEWPORT:
							{
								x = T ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(E, window.innerHeight) / window.innerHeight;
								break
							}
						case st.PAGE:
							{
								let {
									scrollLeft: V,
									scrollTop: W,
									scrollWidth: D,
									scrollHeight: $
								} = rn();x = T ? Math.min(V + m, D) / D : Math.min(W + b, $) / $;
								break
							}
						case st.ELEMENT:
						default:
							{
								M = WE(i, u);
								let V = n.type.indexOf("mouse") === 0;
								if (V && ft({
										element: t,
										nativeEvent: n
									}) !== !0) break;
								let W = t.getBoundingClientRect(),
									{
										left: D,
										top: $,
										width: z,
										height: Y
									} = W;
								if (!V && !XU({
										left: p,
										top: E
									}, W)) break;P = !0,
								x = T ? (p - D) / z : (E - $) / Y;
								break
							}
					}
					return O && (x > 1 - YE || x < YE) && (x = Math.round(x)), (a !== st.ELEMENT || P || P !== o.elementHovered) && (x = f ? 1 - x : x, e.dispatch(mr(M, x))), {
						elementHovered: P,
						clientX: p,
						clientY: E,
						pageX: m,
						pageY: b
					}
				}
			},
			[DU]: {
				types: Is,
				handler: ({
					store: e,
					eventConfig: t
				}) => {
					let {
						continuousParameterGroupId: r,
						reverse: n
					} = t, {
						scrollTop: i,
						scrollHeight: o,
						clientHeight: a
					} = rn(), s = i / (o - a);
					s = n ? 1 - s : s, e.dispatch(mr(r, s))
				}
			},
			[qU]: {
				types: Is,
				handler: ({
					element: e,
					store: t,
					eventConfig: r,
					eventStateKey: n
				}, i = {
					scrollPercent: 0
				}) => {
					let {
						scrollLeft: o,
						scrollTop: a,
						scrollWidth: s,
						scrollHeight: u,
						clientHeight: f
					} = rn(), {
						basedOn: I,
						selectedAxis: p,
						continuousParameterGroupId: E,
						startsEntering: m,
						startsExiting: b,
						addEndOffset: T,
						addStartOffset: O,
						addOffsetValue: x = 0,
						endOffsetValue: M = 0
					} = r, P = p === "X_AXIS";
					if (I === st.VIEWPORT) {
						let V = P ? o / s : a / u;
						return V !== i.scrollPercent && t.dispatch(mr(E, V)), {
							scrollPercent: V
						}
					} else {
						let V = WE(n, E),
							W = e.getBoundingClientRect(),
							D = (O ? x : 0) / 100,
							$ = (T ? M : 0) / 100;
						D = m ? D : 1 - D, $ = b ? $ : 1 - $;
						let z = W.top + Math.min(W.height * D, f),
							te = W.top + W.height * $ - z,
							j = Math.min(f + te, u),
							_ = Math.min(Math.max(0, f - z), j) / j;
						return _ !== i.scrollPercent && t.dispatch(mr(V, _)), {
							scrollPercent: _
						}
					}
				}
			},
			[tb]: KE,
			[NU]: KE,
			[eb]: { ...Ts,
				handler: jE((e, t) => {
					t.scrollingDown && We(e)
				})
			},
			[PU]: { ...Ts,
				handler: jE((e, t) => {
					t.scrollingDown || We(e)
				})
			},
			[rb]: {
				types: "readystatechange IX2_PAGE_UPDATE",
				handler: et(nn, jU(We))
			},
			[nb]: {
				types: "readystatechange IX2_PAGE_UPDATE",
				handler: et(nn, zU(We))
			}
		}
	});
	var Ab = {};
	Ge(Ab, {
		observeRequests: () => pV,
		startActionGroup: () => an,
		startEngine: () => Ni,
		stopActionGroup: () => Er,
		stopAllActionGroups: () => wb,
		stopEngine: () => Pi
	});

	function pV(e) {
		Vt({
			store: e,
			select: ({
				ixRequest: t
			}) => t.preview,
			onChange: hV
		}), Vt({
			store: e,
			select: ({
				ixRequest: t
			}) => t.playback,
			onChange: mV
		}), Vt({
			store: e,
			select: ({
				ixRequest: t
			}) => t.stop,
			onChange: yV
		}), Vt({
			store: e,
			select: ({
				ixRequest: t
			}) => t.clear,
			onChange: EV
		})
	}

	function vV(e) {
		Vt({
			store: e,
			select: ({
				ixSession: t
			}) => t.mediaQueryKey,
			onChange: () => {
				Pi(e), bb({
					store: e,
					elementApi: De
				}), Ni({
					store: e,
					allowEvents: !0
				}), _b()
			}
		})
	}

	function gV(e, t) {
		let r = Vt({
			store: e,
			select: ({
				ixSession: n
			}) => n.tick,
			onChange: n => {
				t(n), r()
			}
		})
	}

	function hV({
		rawData: e,
		defer: t
	}, r) {
		let n = () => {
			Ni({
				store: r,
				rawData: e,
				allowEvents: !0
			}), _b()
		};
		t ? setTimeout(n, 0) : n()
	}

	function _b() {
		document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
	}

	function mV(e, t) {
		let {
			actionTypeId: r,
			actionListId: n,
			actionItemId: i,
			eventId: o,
			allowEvents: a,
			immediate: s,
			testManual: u,
			verbose: f = !0
		} = e, {
			rawData: I
		} = e;
		if (n && i && I && s) {
			let p = I.actionLists[n];
			p && (I = rV({
				actionList: p,
				actionItemId: i,
				rawData: I
			}))
		}
		if (Ni({
				store: t,
				rawData: I,
				allowEvents: a,
				testManual: u
			}), n && r === Ue.GENERAL_START_ACTION || xs(r)) {
			Er({
				store: t,
				actionListId: n
			}), Tb({
				store: t,
				actionListId: n,
				eventId: o
			});
			let p = an({
				store: t,
				eventId: o,
				actionListId: n,
				immediate: s,
				verbose: f
			});
			f && p && t.dispatch(yr({
				actionListId: n,
				isPlaying: !s
			}))
		}
	}

	function yV({
		actionListId: e
	}, t) {
		e ? Er({
			store: t,
			actionListId: e
		}) : wb({
			store: t
		}), Pi(t)
	}

	function EV(e, t) {
		Pi(t), bb({
			store: t,
			elementApi: De
		})
	}

	function Ni({
		store: e,
		rawData: t,
		allowEvents: r,
		testManual: n
	}) {
		let {
			ixSession: i
		} = e.getState();
		t && e.dispatch(rs(t)), i.active || (e.dispatch(ns({
			hasBoundaryNodes: !!document.querySelector(Si),
			reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
		})), r && (xV(e), bV(), e.getState().ixSession.hasDefinedMediaQueries && vV(e)), e.dispatch(is()), _V(e, n))
	}

	function bV() {
		let {
			documentElement: e
		} = document;
		e.className.indexOf(fb) === -1 && (e.className += ` ${fb}`)
	}

	function _V(e, t) {
		let r = n => {
			let {
				ixSession: i,
				ixParameters: o
			} = e.getState();
			i.active && (e.dispatch(hi(n, o)), t ? gV(e, r) : requestAnimationFrame(r))
		};
		r(window.performance.now())
	}

	function Pi(e) {
		let {
			ixSession: t
		} = e.getState();
		if (t.active) {
			let {
				eventListeners: r
			} = t;
			r.forEach(IV), aV(), e.dispatch(os())
		}
	}

	function IV({
		target: e,
		listenerParams: t
	}) {
		e.removeEventListener.apply(e, t)
	}

	function TV({
		store: e,
		eventStateKey: t,
		eventTarget: r,
		eventId: n,
		eventConfig: i,
		actionListId: o,
		parameterGroup: a,
		smoothing: s,
		restingValue: u
	}) {
		let {
			ixData: f,
			ixSession: I
		} = e.getState(), {
			events: p
		} = f, E = p[n], {
			eventTypeId: m
		} = E, b = {}, T = {}, O = [], {
			continuousActionGroups: x
		} = a, {
			id: M
		} = a;
		nV(m, i) && (M = iV(t, M));
		let P = I.hasBoundaryNodes && r ? tn(r, Si) : null;
		x.forEach(V => {
			let {
				keyframe: W,
				actionItems: D
			} = V;
			D.forEach($ => {
				let {
					actionTypeId: z
				} = $, {
					target: Y
				} = $.config;
				if (!Y) return;
				let te = Y.boundaryMode ? P : null,
					j = sV(Y) + Os + z;
				if (T[j] = wV(T[j], W, $), !b[j]) {
					b[j] = !0;
					let {
						config: C
					} = $;
					Ci({
						config: C,
						event: E,
						eventTarget: r,
						elementRoot: te,
						elementApi: De
					}).forEach(_ => {
						O.push({
							element: _,
							key: j
						})
					})
				}
			})
		}), O.forEach(({
			element: V,
			key: W
		}) => {
			let D = T[W],
				$ = (0, yt.default)(D, "[0].actionItems[0]", {}),
				{
					actionTypeId: z
				} = $,
				Y = Li(z) ? Ss(z)(V, $) : null,
				te = As({
					element: V,
					actionItem: $,
					elementApi: De
				}, Y);
			Cs({
				store: e,
				element: V,
				eventId: n,
				actionListId: o,
				actionItem: $,
				destination: te,
				continuous: !0,
				parameterId: M,
				actionGroups: D,
				smoothing: s,
				restingValue: u,
				pluginInstance: Y
			})
		})
	}

	function wV(e = [], t, r) {
		let n = [...e],
			i;
		return n.some((o, a) => o.keyframe === t ? (i = a, !0) : !1), i == null && (i = n.length, n.push({
			keyframe: t,
			actionItems: []
		})), n[i].actionItems.push(r), n
	}

	function xV(e) {
		let {
			ixData: t
		} = e.getState(), {
			eventTypeMap: r
		} = t;
		Ib(e), (0, br.default)(r, (i, o) => {
			let a = cb[o];
			if (!a) {
				console.warn(`IX2 event type not configured: ${o}`);
				return
			}
			LV({
				logic: a,
				store: e,
				events: i
			})
		});
		let {
			ixSession: n
		} = e.getState();
		n.eventListeners.length && AV(e)
	}

	function AV(e) {
		let t = () => {
			Ib(e)
		};
		OV.forEach(r => {
			window.addEventListener(r, t), e.dispatch(gi(window, [r, t]))
		}), t()
	}

	function Ib(e) {
		let {
			ixSession: t,
			ixData: r
		} = e.getState(), n = window.innerWidth;
		if (n !== t.viewportWidth) {
			let {
				mediaQueries: i
			} = r;
			e.dispatch(ls({
				width: n,
				mediaQueries: i
			}))
		}
	}

	function LV({
		logic: e,
		store: t,
		events: r
	}) {
		NV(r);
		let {
			types: n,
			handler: i
		} = e, {
			ixData: o
		} = t.getState(), {
			actionLists: a
		} = o, s = SV(r, RV);
		if (!(0, vb.default)(s)) return;
		(0, br.default)(s, (p, E) => {
			let m = r[E],
				{
					action: b,
					id: T,
					mediaQueries: O = o.mediaQueryKeys
				} = m,
				{
					actionListId: x
				} = b.config;
			uV(O, o.mediaQueryKeys) || t.dispatch(fs()), b.actionTypeId === Ue.GENERAL_CONTINUOUS_ACTION && (Array.isArray(m.config) ? m.config : [m.config]).forEach(P => {
				let {
					continuousParameterGroupId: V
				} = P, W = (0, yt.default)(a, `${x}.continuousParameterGroups`, []), D = (0, pb.default)(W, ({
					id: Y
				}) => Y === V), $ = (P.smoothing || 0) / 100, z = (P.restingState || 0) / 100;
				D && p.forEach((Y, te) => {
					let j = T + Os + te;
					TV({
						store: t,
						eventStateKey: j,
						eventTarget: Y,
						eventId: T,
						eventConfig: P,
						actionListId: x,
						parameterGroup: D,
						smoothing: $,
						restingValue: z
					})
				})
			}), (b.actionTypeId === Ue.GENERAL_START_ACTION || xs(b.actionTypeId)) && Tb({
				store: t,
				actionListId: x,
				eventId: T
			})
		});
		let u = p => {
				let {
					ixSession: E
				} = t.getState();
				CV(s, (m, b, T) => {
					let O = r[b],
						x = E.eventState[T],
						{
							action: M,
							mediaQueries: P = o.mediaQueryKeys
						} = O;
					if (!Ri(P, E.mediaQueryKey)) return;
					let V = (W = {}) => {
						let D = i({
							store: t,
							element: m,
							event: O,
							eventConfig: W,
							nativeEvent: p,
							eventStateKey: T
						}, x);
						cV(D, x) || t.dispatch(as(T, D))
					};
					M.actionTypeId === Ue.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(O.config) ? O.config : [O.config]).forEach(V) : V()
				})
			},
			f = (0, yb.default)(u, dV),
			I = ({
				target: p = document,
				types: E,
				throttle: m
			}) => {
				E.split(" ").filter(Boolean).forEach(b => {
					let T = m ? f : u;
					p.addEventListener(b, T), t.dispatch(gi(p, [b, T]))
				})
			};
		Array.isArray(n) ? n.forEach(I) : typeof n == "string" && I(e)
	}

	function NV(e) {
		if (!fV) return;
		let t = {},
			r = "";
		for (let n in e) {
			let {
				eventTypeId: i,
				target: o
			} = e[n], a = ps(o);
			t[a] || (i === Ze.MOUSE_CLICK || i === Ze.MOUSE_SECOND_CLICK) && (t[a] = !0, r += a + "{cursor: pointer;touch-action: manipulation;}")
		}
		if (r) {
			let n = document.createElement("style");
			n.textContent = r, document.body.appendChild(n)
		}
	}

	function Tb({
		store: e,
		actionListId: t,
		eventId: r
	}) {
		let {
			ixData: n,
			ixSession: i
		} = e.getState(), {
			actionLists: o,
			events: a
		} = n, s = a[r], u = o[t];
		if (u && u.useFirstGroupAsInitialState) {
			let f = (0, yt.default)(u, "actionItemGroups[0].actionItems", []),
				I = (0, yt.default)(s, "mediaQueries", n.mediaQueryKeys);
			if (!Ri(I, i.mediaQueryKey)) return;
			f.forEach(p => {
				let {
					config: E,
					actionTypeId: m
				} = p, b = E?.target?.useEventTarget === !0 && E?.target?.objectId == null ? {
					target: s.target,
					targets: s.targets
				} : E, T = Ci({
					config: b,
					event: s,
					elementApi: De
				}), O = Li(m);
				T.forEach(x => {
					let M = O ? Ss(m)(x, p) : null;
					Cs({
						destination: As({
							element: x,
							actionItem: p,
							elementApi: De
						}, M),
						immediate: !0,
						store: e,
						element: x,
						eventId: r,
						actionItem: p,
						actionListId: t,
						pluginInstance: M
					})
				})
			})
		}
	}

	function wb({
		store: e
	}) {
		let {
			ixInstances: t
		} = e.getState();
		(0, br.default)(t, r => {
			if (!r.continuous) {
				let {
					actionListId: n,
					verbose: i
				} = r;
				Rs(r, e), i && e.dispatch(yr({
					actionListId: n,
					isPlaying: !1
				}))
			}
		})
	}

	function Er({
		store: e,
		eventId: t,
		eventTarget: r,
		eventStateKey: n,
		actionListId: i
	}) {
		let {
			ixInstances: o,
			ixSession: a
		} = e.getState(), s = a.hasBoundaryNodes && r ? tn(r, Si) : null;
		(0, br.default)(o, u => {
			let f = (0, yt.default)(u, "actionItem.config.target.boundaryMode"),
				I = n ? u.eventStateKey === n : !0;
			if (u.actionListId === i && u.eventId === t && I) {
				if (s && f && !vs(s, u.element)) return;
				Rs(u, e), u.verbose && e.dispatch(yr({
					actionListId: i,
					isPlaying: !1
				}))
			}
		})
	}

	function an({
		store: e,
		eventId: t,
		eventTarget: r,
		eventStateKey: n,
		actionListId: i,
		groupIndex: o = 0,
		immediate: a,
		verbose: s
	}) {
		let {
			ixData: u,
			ixSession: f
		} = e.getState(), {
			events: I
		} = u, p = I[t] || {}, {
			mediaQueries: E = u.mediaQueryKeys
		} = p, m = (0, yt.default)(u, `actionLists.${i}`, {}), {
			actionItemGroups: b,
			useFirstGroupAsInitialState: T
		} = m;
		if (!b || !b.length) return !1;
		o >= b.length && (0, yt.default)(p, "config.loop") && (o = 0), o === 0 && T && o++;
		let x = (o === 0 || o === 1 && T) && xs(p.action?.actionTypeId) ? p.config.delay : void 0,
			M = (0, yt.default)(b, [o, "actionItems"], []);
		if (!M.length || !Ri(E, f.mediaQueryKey)) return !1;
		let P = f.hasBoundaryNodes && r ? tn(r, Si) : null,
			V = JU(M),
			W = !1;
		return M.forEach((D, $) => {
			let {
				config: z,
				actionTypeId: Y
			} = D, te = Li(Y), {
				target: j
			} = z;
			if (!j) return;
			let C = j.boundaryMode ? P : null;
			Ci({
				config: z,
				event: p,
				eventTarget: r,
				elementRoot: C,
				elementApi: De
			}).forEach((L, k) => {
				let H = te ? Ss(Y)(L, D) : null,
					ee = te ? lV(Y)(L, D) : null;
				W = !0;
				let re = V === $ && k === 0,
					U = eV({
						element: L,
						actionItem: D
					}),
					B = As({
						element: L,
						actionItem: D,
						elementApi: De
					}, H);
				Cs({
					store: e,
					element: L,
					actionItem: D,
					eventId: t,
					eventTarget: r,
					eventStateKey: n,
					actionListId: i,
					groupIndex: o,
					isCarrier: re,
					computedStyle: U,
					destination: B,
					immediate: a,
					verbose: s,
					pluginInstance: H,
					pluginDuration: ee,
					instanceDelay: x
				})
			})
		}), W
	}

	function Cs(e) {
		let {
			store: t,
			computedStyle: r,
			...n
		} = e, {
			element: i,
			actionItem: o,
			immediate: a,
			pluginInstance: s,
			continuous: u,
			restingValue: f,
			eventId: I
		} = n, p = !u, E = $U(), {
			ixElements: m,
			ixSession: b,
			ixData: T
		} = t.getState(), O = QU(m, i), {
			refState: x
		} = m[O] || {}, M = gs(i), P = b.reducedMotion && Yo[o.actionTypeId], V;
		if (P && u) switch (T.events[I]?.eventTypeId) {
			case Ze.MOUSE_MOVE:
			case Ze.MOUSE_MOVE_IN_VIEWPORT:
				V = f;
				break;
			default:
				V = .5;
				break
		}
		let W = tV(i, x, r, o, De, s);
		if (t.dispatch(ss({
				instanceId: E,
				elementId: O,
				origin: W,
				refType: M,
				skipMotion: P,
				skipToValue: V,
				...n
			})), xb(document.body, "ix2-animation-started", E), a) {
			PV(t, E);
			return
		}
		Vt({
			store: t,
			select: ({
				ixInstances: D
			}) => D[E],
			onChange: Ob
		}), p && t.dispatch(mi(E, b.tick))
	}

	function Rs(e, t) {
		xb(document.body, "ix2-animation-stopping", {
			instanceId: e.id,
			state: t.getState()
		});
		let {
			elementId: r,
			actionItem: n
		} = e, {
			ixElements: i
		} = t.getState(), {
			ref: o,
			refType: a
		} = i[r] || {};
		a === Eb && oV(o, n, De), t.dispatch(us(e.id))
	}

	function xb(e, t, r) {
		let n = document.createEvent("CustomEvent");
		n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
	}

	function PV(e, t) {
		let {
			ixParameters: r
		} = e.getState();
		e.dispatch(mi(t, 0)), e.dispatch(hi(performance.now(), r));
		let {
			ixInstances: n
		} = e.getState();
		Ob(n[t], e)
	}

	function Ob(e, t) {
		let {
			active: r,
			continuous: n,
			complete: i,
			elementId: o,
			actionItem: a,
			actionTypeId: s,
			renderType: u,
			current: f,
			groupIndex: I,
			eventId: p,
			eventTarget: E,
			eventStateKey: m,
			actionListId: b,
			isCarrier: T,
			styleProp: O,
			verbose: x,
			pluginInstance: M
		} = e, {
			ixData: P,
			ixSession: V
		} = t.getState(), {
			events: W
		} = P, D = W[p] || {}, {
			mediaQueries: $ = P.mediaQueryKeys
		} = D;
		if (Ri($, V.mediaQueryKey) && (n || r || i)) {
			if (f || u === YU && i) {
				t.dispatch(cs(o, s, f, a));
				let {
					ixElements: z
				} = t.getState(), {
					ref: Y,
					refType: te,
					refState: j
				} = z[o] || {}, C = j && j[s];
				(te === Eb || Li(s)) && ZU(Y, j, C, p, a, O, De, u, M)
			}
			if (i) {
				if (T) {
					let z = an({
						store: t,
						eventId: p,
						eventTarget: E,
						eventStateKey: m,
						actionListId: b,
						groupIndex: I + 1,
						verbose: x
					});
					x && !z && t.dispatch(yr({
						actionListId: b,
						isPlaying: !1
					}))
				}
				Rs(e, t)
			}
		}
	}
	var pb, yt, vb, gb, hb, mb, br, yb, Ai, KU, xs, Os, Si, Eb, YU, fb, Ci, QU, As, Vt, $U, ZU, bb, JU, eV, tV, rV, nV, iV, Ri, oV, aV, sV, uV, cV, Li, Ss, lV, db, fV, dV, OV, SV, CV, RV, ws = me(() => {
		"use strict";
		pb = de(wa()), yt = de($n()), vb = de(Um()), gb = de(dy()), hb = de(vy()), mb = de(hy()), br = de(Iy()), yb = de(Cy());
		Ve();
		Ai = de(Ut());
		yi();
		My();
		lb();
		KU = Object.keys(Cn), xs = e => KU.includes(e), {
			COLON_DELIMITER: Os,
			BOUNDARY_SELECTOR: Si,
			HTML_ELEMENT: Eb,
			RENDER_GENERAL: YU,
			W_MOD_IX: fb
		} = Le, {
			getAffectedElements: Ci,
			getElementId: QU,
			getDestinationValues: As,
			observeStore: Vt,
			getInstanceId: $U,
			renderHTMLElement: ZU,
			clearAllStyles: bb,
			getMaxDurationItemIndex: JU,
			getComputedStyle: eV,
			getInstanceOrigin: tV,
			reduceListToGroup: rV,
			shouldNamespaceEventParameter: nV,
			getNamespacedParameterId: iV,
			shouldAllowMediaQuery: Ri,
			cleanupHTMLElement: oV,
			clearObjectCache: aV,
			stringifyTarget: sV,
			mediaQueriesEqual: uV,
			shallowEqual: cV
		} = Ai.IX2VanillaUtils, {
			isPluginType: Li,
			createPluginInstance: Ss,
			getPluginDuration: lV
		} = Ai.IX2VanillaPlugins, db = navigator.userAgent, fV = db.match(/iPad/i) || db.match(/iPhone/), dV = 12;
		OV = ["resize", "orientationchange"];
		SV = (e, t) => (0, gb.default)((0, mb.default)(e, t), hb.default), CV = (e, t) => {
			(0, br.default)(e, (r, n) => {
				r.forEach((i, o) => {
					let a = n + Os + o;
					t(i, n, a)
				})
			})
		}, RV = e => {
			let t = {
				target: e.target,
				targets: e.targets
			};
			return Ci({
				config: t,
				elementApi: De
			})
		}
	});
	var Cb = l(Et => {
		"use strict";
		var qV = hn().default,
			MV = lu().default;
		Object.defineProperty(Et, "__esModule", {
			value: !0
		});
		Et.actions = void 0;
		Et.destroy = Sb;
		Et.init = UV;
		Et.setEnv = GV;
		Et.store = void 0;
		Yl();
		var FV = jo(),
			DV = MV((_m(), nt(bm))),
			Ls = (ws(), nt(Ab)),
			kV = qV((yi(), nt(Ly)));
		Et.actions = kV;
		var Ns = Et.store = (0, FV.createStore)(DV.default);

		function GV(e) {
			e() && (0, Ls.observeRequests)(Ns)
		}

		function UV(e) {
			Sb(), (0, Ls.startEngine)({
				store: Ns,
				rawData: e,
				allowEvents: !0
			})
		}

		function Sb() {
			(0, Ls.stopEngine)(Ns)
		}
	});
	var Pb = l((dz, Nb) => {
		"use strict";
		var Rb = qe(),
			Lb = Cb();
		Lb.setEnv(Rb.env);
		Rb.define("ix2", Nb.exports = function() {
			return Lb
		})
	});
	var Mb = l((pz, qb) => {
		"use strict";
		var _r = qe();
		_r.define("links", qb.exports = function(e, t) {
			var r = {},
				n = e(window),
				i, o = _r.env(),
				a = window.location,
				s = document.createElement("a"),
				u = "w--current",
				f = /index\.(html|php)$/,
				I = /\/$/,
				p, E;
			r.ready = r.design = r.preview = m;

			function m() {
				i = o && _r.env("design"), E = _r.env("slug") || a.pathname || "", _r.scroll.off(T), p = [];
				for (var x = document.links, M = 0; M < x.length; ++M) b(x[M]);
				p.length && (_r.scroll.on(T), T())
			}

			function b(x) {
				if (!x.getAttribute("hreflang")) {
					var M = i && x.getAttribute("href-disabled") || x.getAttribute("href");
					if (s.href = M, !(M.indexOf(":") >= 0)) {
						var P = e(x);
						if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
							if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
							var V = e(s.hash);
							V.length && p.push({
								link: P,
								sec: V,
								active: !1
							});
							return
						}
						if (!(M === "#" || M === "")) {
							var W = s.href === a.href || M === E || f.test(M) && I.test(E);
							O(P, u, W)
						}
					}
				}
			}

			function T() {
				var x = n.scrollTop(),
					M = n.height();
				t.each(p, function(P) {
					if (!P.link.attr("hreflang")) {
						var V = P.link,
							W = P.sec,
							D = W.offset().top,
							$ = W.outerHeight(),
							z = M * .5,
							Y = W.is(":visible") && D + $ - z >= x && D + z <= x + M;
						P.active !== Y && (P.active = Y, O(V, u, Y))
					}
				})
			}

			function O(x, M, P) {
				var V = x.hasClass(M);
				P && V || !P && !V || (P ? x.addClass(M) : x.removeClass(M))
			}
			return r
		})
	});
	var Db = l((vz, Fb) => {
		"use strict";
		var qi = qe();
		qi.define("scroll", Fb.exports = function(e) {
			var t = {
					WF_CLICK_EMPTY: "click.wf-empty-link",
					WF_CLICK_SCROLL: "click.wf-scroll"
				},
				r = window.location,
				n = b() ? null : window.history,
				i = e(window),
				o = e(document),
				a = e(document.body),
				s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(C) {
					window.setTimeout(C, 15)
				},
				u = qi.env("editor") ? ".w-editor-body" : "body",
				f = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])",
				I = 'a[href="#"]',
				p = 'a[href*="#"]:not(.w-tab-link):not(' + I + ")",
				E = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
				m = document.createElement("style");
			m.appendChild(document.createTextNode(E));

			function b() {
				try {
					return !!window.frameElement
				} catch {
					return !0
				}
			}
			var T = /^#[a-zA-Z0-9][\w:.-]*$/;

			function O(C) {
				return T.test(C.hash) && C.host + C.pathname === r.host + r.pathname
			}
			let x = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

			function M() {
				return document.body.getAttribute("data-wf-scroll-motion") === "none" || x.matches
			}

			function P(C, _) {
				var L;
				switch (_) {
					case "add":
						L = C.attr("tabindex"), L ? C.attr("data-wf-tabindex-swap", L) : C.attr("tabindex", "-1");
						break;
					case "remove":
						L = C.attr("data-wf-tabindex-swap"), L ? (C.attr("tabindex", L), C.removeAttr("data-wf-tabindex-swap")) : C.removeAttr("tabindex");
						break
				}
				C.toggleClass("wf-force-outline-none", _ === "add")
			}

			function V(C) {
				var _ = C.currentTarget;
				if (!(qi.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(_.className))) {
					var L = O(_) ? _.hash : "";
					if (L !== "") {
						var k = e(L);
						k.length && (C && (C.preventDefault(), C.stopPropagation()), W(L, C), window.setTimeout(function() {
							D(k, function() {
								P(k, "add"), k.get(0).focus({
									preventScroll: !0
								}), P(k, "remove")
							})
						}, C ? 0 : 300))
					}
				}
			}

			function W(C) {
				if (r.hash !== C && n && n.pushState && !(qi.env.chrome && r.protocol === "file:")) {
					var _ = n.state && n.state.hash;
					_ !== C && n.pushState({
						hash: C
					}, "", C)
				}
			}

			function D(C, _) {
				var L = i.scrollTop(),
					k = $(C);
				if (L !== k) {
					var H = z(C, L, k),
						ee = Date.now(),
						re = function() {
							var U = Date.now() - ee;
							window.scroll(0, Y(L, k, U, H)), U <= H ? s(re) : typeof _ == "function" && _()
						};
					s(re)
				}
			}

			function $(C) {
				var _ = e(f),
					L = _.css("position") === "fixed" ? _.outerHeight() : 0,
					k = C.offset().top - L;
				if (C.data("scroll") === "mid") {
					var H = i.height() - L,
						ee = C.outerHeight();
					ee < H && (k -= Math.round((H - ee) / 2))
				}
				return k
			}

			function z(C, _, L) {
				if (M()) return 0;
				var k = 1;
				return a.add(C).each(function(H, ee) {
					var re = parseFloat(ee.getAttribute("data-scroll-time"));
					!isNaN(re) && re >= 0 && (k = re)
				}), (472.143 * Math.log(Math.abs(_ - L) + 125) - 2e3) * k
			}

			function Y(C, _, L, k) {
				return L > k ? _ : C + (_ - C) * te(L / k)
			}

			function te(C) {
				return C < .5 ? 4 * C * C * C : (C - 1) * (2 * C - 2) * (2 * C - 2) + 1
			}

			function j() {
				var {
					WF_CLICK_EMPTY: C,
					WF_CLICK_SCROLL: _
				} = t;
				o.on(_, p, V), o.on(C, I, function(L) {
					L.preventDefault()
				}), document.head.insertBefore(m, document.head.firstChild)
			}
			return {
				ready: j
			}
		})
	});
	var Gb = l((gz, kb) => {
		"use strict";
		var VV = qe();
		VV.define("touch", kb.exports = function(e) {
			var t = {},
				r = window.getSelection;
			e.event.special.tap = {
				bindType: "click",
				delegateType: "click"
			}, t.init = function(o) {
				return o = typeof o == "string" ? e(o).get(0) : o, o ? new n(o) : null
			};

			function n(o) {
				var a = !1,
					s = !1,
					u = Math.min(Math.round(window.innerWidth * .04), 40),
					f, I;
				o.addEventListener("touchstart", p, !1), o.addEventListener("touchmove", E, !1), o.addEventListener("touchend", m, !1), o.addEventListener("touchcancel", b, !1), o.addEventListener("mousedown", p, !1), o.addEventListener("mousemove", E, !1), o.addEventListener("mouseup", m, !1), o.addEventListener("mouseout", b, !1);

				function p(O) {
					var x = O.touches;
					x && x.length > 1 || (a = !0, x ? (s = !0, f = x[0].clientX) : f = O.clientX, I = f)
				}

				function E(O) {
					if (a) {
						if (s && O.type === "mousemove") {
							O.preventDefault(), O.stopPropagation();
							return
						}
						var x = O.touches,
							M = x ? x[0].clientX : O.clientX,
							P = M - I;
						I = M, Math.abs(P) > u && r && String(r()) === "" && (i("swipe", O, {
							direction: P > 0 ? "right" : "left"
						}), b())
					}
				}

				function m(O) {
					if (a && (a = !1, s && O.type === "mouseup")) {
						O.preventDefault(), O.stopPropagation(), s = !1;
						return
					}
				}

				function b() {
					a = !1
				}

				function T() {
					o.removeEventListener("touchstart", p, !1), o.removeEventListener("touchmove", E, !1), o.removeEventListener("touchend", m, !1), o.removeEventListener("touchcancel", b, !1), o.removeEventListener("mousedown", p, !1), o.removeEventListener("mousemove", E, !1), o.removeEventListener("mouseup", m, !1), o.removeEventListener("mouseout", b, !1), o = null
				}
				this.destroy = T
			}

			function i(o, a, s) {
				var u = e.Event(o, {
					originalEvent: a
				});
				e(a.target).trigger(u, s)
			}
			return t.instance = t.init(document), t
		})
	});
	var Hb = l((hz, Vb) => {
		"use strict";
		var Ht = qe(),
			HV = Xt(),
			tt = {
				ARROW_LEFT: 37,
				ARROW_UP: 38,
				ARROW_RIGHT: 39,
				ARROW_DOWN: 40,
				ESCAPE: 27,
				SPACE: 32,
				ENTER: 13,
				HOME: 36,
				END: 35
			},
			Ub = !0,
			WV = /^#[a-zA-Z0-9\-_]+$/;
		Ht.define("dropdown", Vb.exports = function(e, t) {
			var r = t.debounce,
				n = {},
				i = Ht.env(),
				o = !1,
				a, s = Ht.env.touch,
				u = ".w-dropdown",
				f = "w--open",
				I = HV.triggers,
				p = 900,
				E = "focusout" + u,
				m = "keydown" + u,
				b = "mouseenter" + u,
				T = "mousemove" + u,
				O = "mouseleave" + u,
				x = (s ? "click" : "mouseup") + u,
				M = "w-close" + u,
				P = "setting" + u,
				V = e(document),
				W;
			n.ready = D, n.design = function() {
				o && _(), o = !1, D()
			}, n.preview = function() {
				o = !0, D()
			};

			function D() {
				a = i && Ht.env("design"), W = V.find(u), W.each($)
			}

			function $(c, N) {
				var G = e(N),
					A = e.data(N, u);
				A || (A = e.data(N, u, {
					open: !1,
					el: G,
					config: {},
					selectedIdx: -1
				})), A.toggle = A.el.children(".w-dropdown-toggle"), A.list = A.el.children(".w-dropdown-list"), A.links = A.list.find("a:not(.w-dropdown .w-dropdown a)"), A.complete = H(A), A.mouseLeave = re(A), A.mouseUpOutside = k(A), A.mouseMoveOutside = U(A), z(A);
				var Q = A.toggle.attr("id"),
					se = A.list.attr("id");
				Q || (Q = "w-dropdown-toggle-" + c), se || (se = "w-dropdown-list-" + c), A.toggle.attr("id", Q), A.toggle.attr("aria-controls", se), A.toggle.attr("aria-haspopup", "menu"), A.toggle.attr("aria-expanded", "false"), A.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"), A.toggle.prop("tagName") !== "BUTTON" && (A.toggle.attr("role", "button"), A.toggle.attr("tabindex") || A.toggle.attr("tabindex", "0")), A.list.attr("id", se), A.list.attr("aria-labelledby", Q), A.links.each(function(y, X) {
					X.hasAttribute("tabindex") || X.setAttribute("tabindex", "0"), WV.test(X.hash) && X.addEventListener("click", C.bind(null, A))
				}), A.el.off(u), A.toggle.off(u), A.nav && A.nav.off(u);
				var ie = te(A, Ub);
				a && A.el.on(P, Y(A)), a || (i && (A.hovering = !1, C(A)), A.config.hover && A.toggle.on(b, ee(A)), A.el.on(M, ie), A.el.on(m, B(A)), A.el.on(E, h(A)), A.toggle.on(x, ie), A.toggle.on(m, v(A)), A.nav = A.el.closest(".w-nav"), A.nav.on(M, ie))
			}

			function z(c) {
				var N = Number(c.el.css("z-index"));
				c.manageZ = N === p || N === p + 1, c.config = {
					hover: c.el.attr("data-hover") === "true" && !s,
					delay: c.el.attr("data-delay")
				}
			}

			function Y(c) {
				return function(N, G) {
					G = G || {}, z(c), G.open === !0 && j(c, !0), G.open === !1 && C(c, {
						immediate: !0
					})
				}
			}

			function te(c, N) {
				return r(function(G) {
					if (c.open || G && G.type === "w-close") return C(c, {
						forceClose: N
					});
					j(c)
				})
			}

			function j(c) {
				if (!c.open) {
					L(c), c.open = !0, c.list.addClass(f), c.toggle.addClass(f), c.toggle.attr("aria-expanded", "true"), I.intro(0, c.el[0]), Ht.redraw.up(), c.manageZ && c.el.css("z-index", p + 1);
					var N = Ht.env("editor");
					a || V.on(x, c.mouseUpOutside), c.hovering && !N && c.el.on(O, c.mouseLeave), c.hovering && N && V.on(T, c.mouseMoveOutside), window.clearTimeout(c.delayId)
				}
			}

			function C(c, {
				immediate: N,
				forceClose: G
			} = {}) {
				if (c.open && !(c.config.hover && c.hovering && !G)) {
					c.toggle.attr("aria-expanded", "false"), c.open = !1;
					var A = c.config;
					if (I.outro(0, c.el[0]), V.off(x, c.mouseUpOutside), V.off(T, c.mouseMoveOutside), c.el.off(O, c.mouseLeave), window.clearTimeout(c.delayId), !A.delay || N) return c.complete();
					c.delayId = window.setTimeout(c.complete, A.delay)
				}
			}

			function _() {
				V.find(u).each(function(c, N) {
					e(N).triggerHandler(M)
				})
			}

			function L(c) {
				var N = c.el[0];
				W.each(function(G, A) {
					var Q = e(A);
					Q.is(N) || Q.has(N).length || Q.triggerHandler(M)
				})
			}

			function k(c) {
				return c.mouseUpOutside && V.off(x, c.mouseUpOutside), r(function(N) {
					if (c.open) {
						var G = e(N.target);
						if (!G.closest(".w-dropdown-toggle").length) {
							var A = e.inArray(c.el[0], G.parents(u)) === -1,
								Q = Ht.env("editor");
							if (A) {
								if (Q) {
									var se = G.parents().length === 1 && G.parents("svg").length === 1,
										ie = G.parents(".w-editor-bem-EditorHoverControls").length;
									if (se || ie) return
								}
								C(c)
							}
						}
					}
				})
			}

			function H(c) {
				return function() {
					c.list.removeClass(f), c.toggle.removeClass(f), c.manageZ && c.el.css("z-index", "")
				}
			}

			function ee(c) {
				return function() {
					c.hovering = !0, j(c)
				}
			}

			function re(c) {
				return function() {
					c.hovering = !1, c.links.is(":focus") || C(c)
				}
			}

			function U(c) {
				return r(function(N) {
					if (c.open) {
						var G = e(N.target),
							A = e.inArray(c.el[0], G.parents(u)) === -1;
						if (A) {
							var Q = G.parents(".w-editor-bem-EditorHoverControls").length,
								se = G.parents(".w-editor-bem-RTToolbar").length,
								ie = e(".w-editor-bem-EditorOverlay"),
								y = ie.find(".w-editor-edit-outline").length || ie.find(".w-editor-bem-RTToolbar").length;
							if (Q || se || y) return;
							c.hovering = !1, C(c)
						}
					}
				})
			}

			function B(c) {
				return function(N) {
					if (!(a || !c.open)) switch (c.selectedIdx = c.links.index(document.activeElement), N.keyCode) {
						case tt.HOME:
							return c.open ? (c.selectedIdx = 0, g(c), N.preventDefault()) : void 0;
						case tt.END:
							return c.open ? (c.selectedIdx = c.links.length - 1, g(c), N.preventDefault()) : void 0;
						case tt.ESCAPE:
							return C(c), c.toggle.focus(), N.stopPropagation();
						case tt.ARROW_RIGHT:
						case tt.ARROW_DOWN:
							return c.selectedIdx = Math.min(c.links.length - 1, c.selectedIdx + 1), g(c), N.preventDefault();
						case tt.ARROW_LEFT:
						case tt.ARROW_UP:
							return c.selectedIdx = Math.max(-1, c.selectedIdx - 1), g(c), N.preventDefault()
					}
				}
			}

			function g(c) {
				c.links[c.selectedIdx] && c.links[c.selectedIdx].focus()
			}

			function v(c) {
				var N = te(c, Ub);
				return function(G) {
					if (!a) {
						if (!c.open) switch (G.keyCode) {
							case tt.ARROW_UP:
							case tt.ARROW_DOWN:
								return G.stopPropagation()
						}
						switch (G.keyCode) {
							case tt.SPACE:
							case tt.ENTER:
								return N(), G.stopPropagation(), G.preventDefault()
						}
					}
				}
			}

			function h(c) {
				return r(function(N) {
					var {
						relatedTarget: G,
						target: A
					} = N, Q = c.el[0], se = Q.contains(G) || Q.contains(A);
					return se || C(c), N.stopPropagation()
				})
			}
			return n
		})
	});
	var Bb = l((mz, Wb) => {
		"use strict";
		var Ps = qe();
		Ps.define("forms", Wb.exports = function(e, t) {
			var r = {},
				n = e(document),
				i, o = window.location,
				a = window.XDomainRequest && !window.atob,
				s = ".w-form",
				u, f = /e(-)?mail/i,
				I = /^\S+@\S+$/,
				p = window.alert,
				E = Ps.env(),
				m, b, T, O = /list-manage[1-9]?.com/i,
				x = t.debounce(function() {
					p("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
				}, 100);
			r.ready = r.design = r.preview = function() {
				M(), !E && !m && V()
			};

			function M() {
				u = e("html").attr("data-wf-site"), b = "https://webflow.com/api/v1/form/" + u, a && b.indexOf("https://webflow.com") >= 0 && (b = b.replace("https://webflow.com", "https://formdata.webflow.com")), T = `${b}/signFile`, i = e(s + " form"), i.length && i.each(P)
			}

			function P(U, B) {
				var g = e(B),
					v = e.data(B, s);
				v || (v = e.data(B, s, {
					form: g
				})), W(v);
				var h = g.closest("div.w-form");
				v.done = h.find("> .w-form-done"), v.fail = h.find("> .w-form-fail"), v.fileUploads = h.find(".w-file-upload"), v.fileUploads.each(function(G) {
					H(G, v)
				});
				var c = v.form.attr("aria-label") || v.form.attr("data-name") || "Form";
				v.done.attr("aria-label") || v.form.attr("aria-label", c), v.done.attr("tabindex", "-1"), v.done.attr("role", "region"), v.done.attr("aria-label") || v.done.attr("aria-label", c + " success"), v.fail.attr("tabindex", "-1"), v.fail.attr("role", "region"), v.fail.attr("aria-label") || v.fail.attr("aria-label", c + " failure");
				var N = v.action = g.attr("action");
				if (v.handler = null, v.redirect = g.attr("data-redirect"), O.test(N)) {
					v.handler = _;
					return
				}
				if (!N) {
					if (u) {
						v.handler = C;
						return
					}
					x()
				}
			}

			function V() {
				m = !0, n.on("submit", s + " form", function(G) {
					var A = e.data(this, s);
					A.handler && (A.evt = G, A.handler(A))
				});
				let U = ".w-checkbox-input",
					B = ".w-radio-input",
					g = "w--redirected-checked",
					v = "w--redirected-focus",
					h = "w--redirected-focus-visible",
					c = ":focus-visible, [data-wf-focus-visible]",
					N = [
						["checkbox", U],
						["radio", B]
					];
				n.on("change", s + ' form input[type="checkbox"]:not(' + U + ")", G => {
					e(G.target).siblings(U).toggleClass(g)
				}), n.on("change", s + ' form input[type="radio"]', G => {
					e(`input[name="${G.target.name}"]:not(${U})`).map((Q, se) => e(se).siblings(B).removeClass(g));
					let A = e(G.target);
					A.hasClass("w-radio-input") || A.siblings(B).addClass(g)
				}), N.forEach(([G, A]) => {
					n.on("focus", s + ` form input[type="${G}"]:not(` + A + ")", Q => {
						e(Q.target).siblings(A).addClass(v), e(Q.target).filter(c).siblings(A).addClass(h)
					}), n.on("blur", s + ` form input[type="${G}"]:not(` + A + ")", Q => {
						e(Q.target).siblings(A).removeClass(`${v} ${h}`)
					})
				})
			}

			function W(U) {
				var B = U.btn = U.form.find(':input[type="submit"]');
				U.wait = U.btn.attr("data-wait") || null, U.success = !1, B.prop("disabled", !1), U.label && B.val(U.label)
			}

			function D(U) {
				var B = U.btn,
					g = U.wait;
				B.prop("disabled", !0), g && (U.label = B.val(), B.val(g))
			}

			function $(U, B) {
				var g = null;
				return B = B || {}, U.find(':input:not([type="submit"]):not([type="file"])').each(function(v, h) {
					var c = e(h),
						N = c.attr("type"),
						G = c.attr("data-name") || c.attr("name") || "Field " + (v + 1);
					G = encodeURIComponent(G);
					var A = c.val();
					if (N === "checkbox") A = c.is(":checked");
					else if (N === "radio") {
						if (B[G] === null || typeof B[G] == "string") return;
						A = U.find('input[name="' + c.attr("name") + '"]:checked').val() || null
					}
					typeof A == "string" && (A = e.trim(A)), B[G] = A, g = g || j(c, N, G, A)
				}), g
			}

			function z(U) {
				var B = {};
				return U.find(':input[type="file"]').each(function(g, v) {
					var h = e(v),
						c = h.attr("data-name") || h.attr("name") || "File " + (g + 1),
						N = h.attr("data-value");
					typeof N == "string" && (N = e.trim(N)), B[c] = N
				}), B
			}
			let Y = {
				_mkto_trk: "marketo"
			};

			function te() {
				return document.cookie.split("; ").reduce(function(B, g) {
					let v = g.split("="),
						h = v[0];
					if (h in Y) {
						let c = Y[h],
							N = v.slice(1).join("=");
						B[c] = N
					}
					return B
				}, {})
			}

			function j(U, B, g, v) {
				var h = null;
				return B === "password" ? h = "Passwords cannot be submitted." : U.attr("required") ? v ? f.test(U.attr("type")) && (I.test(v) || (h = "Please enter a valid email address for: " + g)) : h = "Please fill out the required field: " + g : g === "g-recaptcha-response" && !v && (h = "Please confirm you\u2019re not a robot."), h
			}

			function C(U) {
				k(U), L(U)
			}

			function _(U) {
				W(U);
				var B = U.form,
					g = {};
				if (/^https/.test(o.href) && !/^https/.test(U.action)) {
					B.attr("method", "post");
					return
				}
				k(U);
				var v = $(B, g);
				if (v) return p(v);
				D(U);
				var h;
				t.each(g, function(A, Q) {
					f.test(Q) && (g.EMAIL = A), /^((full[ _-]?)?name)$/i.test(Q) && (h = A), /^(first[ _-]?name)$/i.test(Q) && (g.FNAME = A), /^(last[ _-]?name)$/i.test(Q) && (g.LNAME = A)
				}), h && !g.FNAME && (h = h.split(" "), g.FNAME = h[0], g.LNAME = g.LNAME || h[1]);
				var c = U.action.replace("/post?", "/post-json?") + "&c=?",
					N = c.indexOf("u=") + 2;
				N = c.substring(N, c.indexOf("&", N));
				var G = c.indexOf("id=") + 3;
				G = c.substring(G, c.indexOf("&", G)), g["b_" + N + "_" + G] = "", e.ajax({
					url: c,
					data: g,
					dataType: "jsonp"
				}).done(function(A) {
					U.success = A.result === "success" || /already/.test(A.msg), U.success || console.info("MailChimp error: " + A.msg), L(U)
				}).fail(function() {
					L(U)
				})
			}

			function L(U) {
				var B = U.form,
					g = U.redirect,
					v = U.success;
				if (v && g) {
					Ps.location(g);
					return
				}
				U.done.toggle(v), U.fail.toggle(!v), v ? U.done.focus() : U.fail.focus(), B.toggle(!v), W(U)
			}

			function k(U) {
				U.evt && U.evt.preventDefault(), U.evt = null
			}

			function H(U, B) {
				if (!B.fileUploads || !B.fileUploads[U]) return;
				var g, v = e(B.fileUploads[U]),
					h = v.find("> .w-file-upload-default"),
					c = v.find("> .w-file-upload-uploading"),
					N = v.find("> .w-file-upload-success"),
					G = v.find("> .w-file-upload-error"),
					A = h.find(".w-file-upload-input"),
					Q = h.find(".w-file-upload-label"),
					se = Q.children(),
					ie = G.find(".w-file-upload-error-msg"),
					y = N.find(".w-file-upload-file"),
					X = N.find(".w-file-remove-link"),
					J = y.find(".w-file-upload-file-name"),
					K = ie.attr("data-w-size-error"),
					le = ie.attr("data-w-type-error"),
					Te = ie.attr("data-w-generic-error");
				if (E || Q.on("click keydown", function(S) {
						S.type === "keydown" && S.which !== 13 && S.which !== 32 || (S.preventDefault(), A.click())
					}), Q.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), X.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), E) A.on("click", function(S) {
					S.preventDefault()
				}), Q.on("click", function(S) {
					S.preventDefault()
				}), se.on("click", function(S) {
					S.preventDefault()
				});
				else {
					X.on("click keydown", function(S) {
						if (S.type === "keydown") {
							if (S.which !== 13 && S.which !== 32) return;
							S.preventDefault()
						}
						A.removeAttr("data-value"), A.val(""), J.html(""), h.toggle(!0), N.toggle(!1), Q.focus()
					}), A.on("change", function(S) {
						g = S.target && S.target.files && S.target.files[0], g && (h.toggle(!1), G.toggle(!1), c.toggle(!0), c.focus(), J.text(g.name), q() || D(B), B.fileUploads[U].uploading = !0, ee(g, w))
					});
					var Re = Q.outerHeight();
					A.height(Re), A.width(1)
				}

				function d(S) {
					var F = S.responseJSON && S.responseJSON.msg,
						ne = Te;
					typeof F == "string" && F.indexOf("InvalidFileTypeError") === 0 ? ne = le : typeof F == "string" && F.indexOf("MaxFileSizeError") === 0 && (ne = K), ie.text(ne), A.removeAttr("data-value"), A.val(""), c.toggle(!1), h.toggle(!0), G.toggle(!0), G.focus(), B.fileUploads[U].uploading = !1, q() || W(B)
				}

				function w(S, F) {
					if (S) return d(S);
					var ne = F.fileName,
						ae = F.postData,
						ge = F.fileId,
						Z = F.s3Url;
					A.attr("data-value", ge), re(Z, ae, g, ne, R)
				}

				function R(S) {
					if (S) return d(S);
					c.toggle(!1), N.css("display", "inline-block"), N.focus(), B.fileUploads[U].uploading = !1, q() || W(B)
				}

				function q() {
					var S = B.fileUploads && B.fileUploads.toArray() || [];
					return S.some(function(F) {
						return F.uploading
					})
				}
			}

			function ee(U, B) {
				var g = new URLSearchParams({
					name: U.name,
					size: U.size
				});
				e.ajax({
					type: "GET",
					url: `${T}?${g}`,
					crossDomain: !0
				}).done(function(v) {
					B(null, v)
				}).fail(function(v) {
					B(v)
				})
			}

			function re(U, B, g, v, h) {
				var c = new FormData;
				for (var N in B) c.append(N, B[N]);
				c.append("file", g, v), e.ajax({
					type: "POST",
					url: U,
					data: c,
					processData: !1,
					contentType: !1
				}).done(function() {
					h(null)
				}).fail(function(G) {
					h(G)
				})
			}
			return r
		})
	});
	var zb = l((yz, jb) => {
		"use strict";
		var qs = qe(),
			Xb = "w-condition-invisible",
			BV = "." + Xb;

		function XV(e) {
			return e.filter(function(t) {
				return !un(t)
			})
		}

		function un(e) {
			return !!(e.$el && e.$el.closest(BV).length)
		}

		function Ms(e, t) {
			for (var r = e; r >= 0; r--)
				if (!un(t[r])) return r;
			return -1
		}

		function Fs(e, t) {
			for (var r = e; r <= t.length - 1; r++)
				if (!un(t[r])) return r;
			return -1
		}

		function jV(e, t) {
			return Ms(e - 1, t) === -1
		}

		function zV(e, t) {
			return Fs(e + 1, t) === -1
		}

		function sn(e, t) {
			e.attr("aria-label") || e.attr("aria-label", t)
		}

		function KV(e, t, r, n) {
			var i = r.tram,
				o = Array.isArray,
				a = "w-lightbox",
				s = a + "-",
				u = /(^|\s+)/g,
				f = [],
				I, p, E, m = [];

			function b(v, h) {
				return f = o(v) ? v : [v], p || b.build(), XV(f).length > 1 && (p.items = p.empty, f.forEach(function(c, N) {
					var G = B("thumbnail"),
						A = B("item").prop("tabIndex", 0).attr("aria-controls", "w-lightbox-view").attr("role", "tab").append(G);
					sn(A, `show item ${N+1} of ${f.length}`), un(c) && A.addClass(Xb), p.items = p.items.add(A), te(c.thumbnailUrl || c.url, function(Q) {
						Q.prop("width") > Q.prop("height") ? H(Q, "wide") : H(Q, "tall"), G.append(H(Q, "thumbnail-image"))
					})
				}), p.strip.empty().append(p.items), H(p.content, "group")), i(ee(p.lightbox, "hide").trigger("focus")).add("opacity .3s").start({
					opacity: 1
				}), H(p.html, "noscroll"), b.show(h || 0)
			}
			b.build = function() {
				return b.destroy(), p = {
					html: r(t.documentElement),
					empty: r()
				}, p.arrowLeft = B("control left inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), p.arrowRight = B("control right inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), p.close = B("control close").attr("role", "button"), sn(p.arrowLeft, "previous image"), sn(p.arrowRight, "next image"), sn(p.close, "close lightbox"), p.spinner = B("spinner").attr("role", "progressbar").attr("aria-live", "polite").attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuemin", 0).attr("aria-valuemax", 100).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), p.strip = B("strip").attr("role", "tablist"), E = new _(p.spinner, L("hide")), p.content = B("content").append(p.spinner, p.arrowLeft, p.arrowRight, p.close), p.container = B("container").append(p.content, p.strip), p.lightbox = B("backdrop hide").append(p.container), p.strip.on("click", k("item"), P), p.content.on("swipe", V).on("click", k("left"), O).on("click", k("right"), x).on("click", k("close"), M).on("click", k("image, caption"), x), p.container.on("click", k("view"), M).on("dragstart", k("img"), D), p.lightbox.on("keydown", $).on("focusin", W), r(n).append(p.lightbox), b
			}, b.destroy = function() {
				p && (ee(p.html, "noscroll"), p.lightbox.remove(), p = void 0)
			}, b.show = function(v) {
				if (v !== I) {
					var h = f[v];
					if (!h) return b.hide();
					if (un(h)) {
						if (v < I) {
							var c = Ms(v - 1, f);
							v = c > -1 ? c : v
						} else {
							var N = Fs(v + 1, f);
							v = N > -1 ? N : v
						}
						h = f[v]
					}
					var G = I;
					I = v, p.spinner.attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), E.show();
					var A = h.html && g(h.width, h.height) || h.url;
					return te(A, function(Q) {
						if (v !== I) return;
						var se = B("figure", "figure").append(H(Q, "image")),
							ie = B("frame").append(se),
							y = B("view").prop("tabIndex", 0).attr("id", "w-lightbox-view").append(ie),
							X, J;
						h.html && (X = r(h.html), J = X.is("iframe"), J && X.on("load", K), se.append(H(X, "embed"))), h.caption && se.append(B("caption", "figcaption").text(h.caption)), p.spinner.before(y), J || K();

						function K() {
							if (p.spinner.attr("aria-hidden", !0).attr("aria-busy", !1).attr("aria-valuenow", 100).attr("aria-valuetext", "Loaded image"), E.hide(), v !== I) {
								y.remove();
								return
							}
							let le = jV(v, f);
							re(p.arrowLeft, "inactive", le), U(p.arrowLeft, le), le && p.arrowLeft.is(":focus") && p.arrowRight.focus();
							let Te = zV(v, f);
							if (re(p.arrowRight, "inactive", Te), U(p.arrowRight, Te), Te && p.arrowRight.is(":focus") && p.arrowLeft.focus(), p.view ? (i(p.view).add("opacity .3s").start({
									opacity: 0
								}).then(j(p.view)), i(y).add("opacity .3s").add("transform .3s").set({
									x: v > G ? "80px" : "-80px"
								}).start({
									opacity: 1,
									x: 0
								})) : y.css("opacity", 1), p.view = y, p.view.prop("tabIndex", 0), p.items) {
								ee(p.items, "active"), p.items.removeAttr("aria-selected");
								var Re = p.items.eq(v);
								H(Re, "active"), Re.attr("aria-selected", !0), C(Re)
							}
						}
					}), p.close.prop("tabIndex", 0), r(":focus").addClass("active-lightbox"), m.length === 0 && (r("body").children().each(function() {
						r(this).hasClass("w-lightbox-backdrop") || r(this).is("script") || (m.push({
							node: r(this),
							hidden: r(this).attr("aria-hidden"),
							tabIndex: r(this).attr("tabIndex")
						}), r(this).attr("aria-hidden", !0).attr("tabIndex", -1))
					}), p.close.focus()), b
				}
			}, b.hide = function() {
				return i(p.lightbox).add("opacity .3s").start({
					opacity: 0
				}).then(Y), b
			}, b.prev = function() {
				var v = Ms(I - 1, f);
				v > -1 && b.show(v)
			}, b.next = function() {
				var v = Fs(I + 1, f);
				v > -1 && b.show(v)
			};

			function T(v) {
				return function(h) {
					this === h.target && (h.stopPropagation(), h.preventDefault(), v())
				}
			}
			var O = T(b.prev),
				x = T(b.next),
				M = T(b.hide),
				P = function(v) {
					var h = r(this).index();
					v.preventDefault(), b.show(h)
				},
				V = function(v, h) {
					v.preventDefault(), h.direction === "left" ? b.next() : h.direction === "right" && b.prev()
				},
				W = function() {
					this.focus()
				};

			function D(v) {
				v.preventDefault()
			}

			function $(v) {
				var h = v.keyCode;
				h === 27 || z(h, "close") ? b.hide() : h === 37 || z(h, "left") ? b.prev() : h === 39 || z(h, "right") ? b.next() : z(h, "item") && r(":focus").click()
			}

			function z(v, h) {
				if (v !== 13 && v !== 32) return !1;
				var c = r(":focus").attr("class"),
					N = L(h).trim();
				return c.includes(N)
			}

			function Y() {
				p && (p.strip.scrollLeft(0).empty(), ee(p.html, "noscroll"), H(p.lightbox, "hide"), p.view && p.view.remove(), ee(p.content, "group"), H(p.arrowLeft, "inactive"), H(p.arrowRight, "inactive"), I = p.view = void 0, m.forEach(function(v) {
					var h = v.node;
					h && (v.hidden ? h.attr("aria-hidden", v.hidden) : h.removeAttr("aria-hidden"), v.tabIndex ? h.attr("tabIndex", v.tabIndex) : h.removeAttr("tabIndex"))
				}), m = [], r(".active-lightbox").removeClass("active-lightbox").focus())
			}

			function te(v, h) {
				var c = B("img", "img");
				return c.one("load", function() {
					h(c)
				}), c.attr("src", v), c
			}

			function j(v) {
				return function() {
					v.remove()
				}
			}

			function C(v) {
				var h = v.get(0),
					c = p.strip.get(0),
					N = h.offsetLeft,
					G = h.clientWidth,
					A = c.scrollLeft,
					Q = c.clientWidth,
					se = c.scrollWidth - Q,
					ie;
				N < A ? ie = Math.max(0, N + G - Q) : N + G > Q + A && (ie = Math.min(N, se)), ie != null && i(p.strip).add("scroll-left 500ms").start({
					"scroll-left": ie
				})
			}

			function _(v, h, c) {
				this.$element = v, this.className = h, this.delay = c || 200, this.hide()
			}
			_.prototype.show = function() {
				var v = this;
				v.timeoutId || (v.timeoutId = setTimeout(function() {
					v.$element.removeClass(v.className), delete v.timeoutId
				}, v.delay))
			}, _.prototype.hide = function() {
				var v = this;
				if (v.timeoutId) {
					clearTimeout(v.timeoutId), delete v.timeoutId;
					return
				}
				v.$element.addClass(v.className)
			};

			function L(v, h) {
				return v.replace(u, (h ? " ." : " ") + s)
			}

			function k(v) {
				return L(v, !0)
			}

			function H(v, h) {
				return v.addClass(L(h))
			}

			function ee(v, h) {
				return v.removeClass(L(h))
			}

			function re(v, h, c) {
				return v.toggleClass(L(h), c)
			}

			function U(v, h) {
				return v.attr("aria-hidden", h).attr("tabIndex", h ? -1 : 0)
			}

			function B(v, h) {
				return H(r(t.createElement(h || "div")), v)
			}

			function g(v, h) {
				var c = '<svg xmlns="http://www.w3.org/2000/svg" width="' + v + '" height="' + h + '"/>';
				return "data:image/svg+xml;charset=utf-8," + encodeURI(c)
			}
			return function() {
				var v = e.navigator.userAgent,
					h = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
					c = v.match(h),
					N = v.indexOf("Android ") > -1 && v.indexOf("Chrome") === -1;
				if (!N && (!c || c[2] > 7)) return;
				var G = t.createElement("style");
				t.head.appendChild(G), e.addEventListener("resize", A, !0);

				function A() {
					var Q = e.innerHeight,
						se = e.innerWidth,
						ie = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + Q + "px}.w-lightbox-view {width:" + se + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * Q + "px}.w-lightbox-image {max-width:" + se + "px;max-height:" + Q + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * Q + "px}.w-lightbox-strip {padding: 0 " + .01 * Q + "px}.w-lightbox-item {width:" + .1 * Q + "px;padding:" + .02 * Q + "px " + .01 * Q + "px}.w-lightbox-thumbnail {height:" + .1 * Q + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * Q + "px}.w-lightbox-content {margin-top:" + .02 * Q + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * Q + "px}.w-lightbox-image {max-width:" + .96 * se + "px;max-height:" + .96 * Q + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * se + "px;max-height:" + .84 * Q + "px}}";
					G.textContent = ie
				}
				A()
			}(), b
		}
		qs.define("lightbox", jb.exports = function(e) {
			var t = {},
				r = qs.env(),
				n = KV(window, document, e, r ? "#lightbox-mountpoint" : "body"),
				i = e(document),
				o, a, s = ".w-lightbox",
				u;
			t.ready = t.design = t.preview = f;

			function f() {
				a = r && qs.env("design"), n.destroy(), u = {}, o = i.find(s), o.webflowLightBox(), o.each(function() {
					sn(e(this), "open lightbox"), e(this).attr("aria-haspopup", "dialog")
				})
			}
			jQuery.fn.extend({
				webflowLightBox: function() {
					var m = this;
					e.each(m, function(b, T) {
						var O = e.data(T, s);
						O || (O = e.data(T, s, {
							el: e(T),
							mode: "images",
							images: [],
							embed: ""
						})), O.el.off(s), I(O), a ? O.el.on("setting" + s, I.bind(null, O)) : O.el.on("click" + s, p(O)).on("click" + s, function(x) {
							x.preventDefault()
						})
					})
				}
			});

			function I(m) {
				var b = m.el.children(".w-json").html(),
					T, O;
				if (!b) {
					m.items = [];
					return
				}
				try {
					b = JSON.parse(b)
				} catch (x) {
					console.error("Malformed lightbox JSON configuration.", x)
				}
				E(b), b.items.forEach(function(x) {
					x.$el = m.el
				}), T = b.group, T ? (O = u[T], O || (O = u[T] = []), m.items = O, b.items.length && (m.index = O.length, O.push.apply(O, b.items))) : (m.items = b.items, m.index = 0)
			}

			function p(m) {
				return function() {
					m.items.length && n(m.items, m.index || 0)
				}
			}

			function E(m) {
				m.images && (m.images.forEach(function(b) {
					b.type = "image"
				}), m.items = m.images), m.embed && (m.embed.type = "video", m.items = [m.embed]), m.groupId && (m.group = m.groupId)
			}
			return t
		})
	});
	var Yb = l((Ez, Kb) => {
		"use strict";
		var St = qe(),
			YV = Xt(),
			Ce = {
				ARROW_LEFT: 37,
				ARROW_UP: 38,
				ARROW_RIGHT: 39,
				ARROW_DOWN: 40,
				ESCAPE: 27,
				SPACE: 32,
				ENTER: 13,
				HOME: 36,
				END: 35
			};
		St.define("navbar", Kb.exports = function(e, t) {
			var r = {},
				n = e.tram,
				i = e(window),
				o = e(document),
				a = t.debounce,
				s, u, f, I, p = St.env(),
				E = '<div class="w-nav-overlay" data-wf-ignore />',
				m = ".w-nav",
				b = "w--open",
				T = "w--nav-dropdown-open",
				O = "w--nav-dropdown-toggle-open",
				x = "w--nav-dropdown-list-open",
				M = "w--nav-link-open",
				P = YV.triggers,
				V = e();
			r.ready = r.design = r.preview = W, r.destroy = function() {
				V = e(), D(), u && u.length && u.each(te)
			};

			function W() {
				f = p && St.env("design"), I = St.env("editor"), s = e(document.body), u = o.find(m), u.length && (u.each(Y), D(), $())
			}

			function D() {
				St.resize.off(z)
			}

			function $() {
				St.resize.on(z)
			}

			function z() {
				u.each(h)
			}

			function Y(y, X) {
				var J = e(X),
					K = e.data(X, m);
				K || (K = e.data(X, m, {
					open: !1,
					el: J,
					config: {},
					selectedIdx: -1
				})), K.menu = J.find(".w-nav-menu"), K.links = K.menu.find(".w-nav-link"), K.dropdowns = K.menu.find(".w-dropdown"), K.dropdownToggle = K.menu.find(".w-dropdown-toggle"), K.dropdownList = K.menu.find(".w-dropdown-list"), K.button = J.find(".w-nav-button"), K.container = J.find(".w-container"), K.overlayContainerId = "w-nav-overlay-" + y, K.outside = g(K);
				var le = J.find(".w-nav-brand");
				le && le.attr("href") === "/" && le.attr("aria-label") == null && le.attr("aria-label", "home"), K.button.attr("style", "-webkit-user-select: text;"), K.button.attr("aria-label") == null && K.button.attr("aria-label", "menu"), K.button.attr("role", "button"), K.button.attr("tabindex", "0"), K.button.attr("aria-controls", K.overlayContainerId), K.button.attr("aria-haspopup", "menu"), K.button.attr("aria-expanded", "false"), K.el.off(m), K.button.off(m), K.menu.off(m), _(K), f ? (j(K), K.el.on("setting" + m, L(K))) : (C(K), K.button.on("click" + m, U(K)), K.menu.on("click" + m, "a", B(K)), K.button.on("keydown" + m, k(K)), K.el.on("keydown" + m, H(K))), h(y, X)
			}

			function te(y, X) {
				var J = e.data(X, m);
				J && (j(J), e.removeData(X, m))
			}

			function j(y) {
				y.overlay && (ie(y, !0), y.overlay.remove(), y.overlay = null)
			}

			function C(y) {
				y.overlay || (y.overlay = e(E).appendTo(y.el), y.overlay.attr("id", y.overlayContainerId), y.parent = y.menu.parent(), ie(y, !0))
			}

			function _(y) {
				var X = {},
					J = y.config || {},
					K = X.animation = y.el.attr("data-animation") || "default";
				X.animOver = /^over/.test(K), X.animDirect = /left$/.test(K) ? -1 : 1, J.animation !== K && y.open && t.defer(re, y), X.easing = y.el.attr("data-easing") || "ease", X.easing2 = y.el.attr("data-easing2") || "ease";
				var le = y.el.attr("data-duration");
				X.duration = le != null ? Number(le) : 400, X.docHeight = y.el.attr("data-doc-height"), y.config = X
			}

			function L(y) {
				return function(X, J) {
					J = J || {};
					var K = i.width();
					_(y), J.open === !0 && Q(y, !0), J.open === !1 && ie(y, !0), y.open && t.defer(function() {
						K !== i.width() && re(y)
					})
				}
			}

			function k(y) {
				return function(X) {
					switch (X.keyCode) {
						case Ce.SPACE:
						case Ce.ENTER:
							return U(y)(), X.preventDefault(), X.stopPropagation();
						case Ce.ESCAPE:
							return ie(y), X.preventDefault(), X.stopPropagation();
						case Ce.ARROW_RIGHT:
						case Ce.ARROW_DOWN:
						case Ce.HOME:
						case Ce.END:
							return y.open ? (X.keyCode === Ce.END ? y.selectedIdx = y.links.length - 1 : y.selectedIdx = 0, ee(y), X.preventDefault(), X.stopPropagation()) : (X.preventDefault(), X.stopPropagation())
					}
				}
			}

			function H(y) {
				return function(X) {
					if (y.open) switch (y.selectedIdx = y.links.index(document.activeElement), X.keyCode) {
						case Ce.HOME:
						case Ce.END:
							return X.keyCode === Ce.END ? y.selectedIdx = y.links.length - 1 : y.selectedIdx = 0, ee(y), X.preventDefault(), X.stopPropagation();
						case Ce.ESCAPE:
							return ie(y), y.button.focus(), X.preventDefault(), X.stopPropagation();
						case Ce.ARROW_LEFT:
						case Ce.ARROW_UP:
							return y.selectedIdx = Math.max(-1, y.selectedIdx - 1), ee(y), X.preventDefault(), X.stopPropagation();
						case Ce.ARROW_RIGHT:
						case Ce.ARROW_DOWN:
							return y.selectedIdx = Math.min(y.links.length - 1, y.selectedIdx + 1), ee(y), X.preventDefault(), X.stopPropagation()
					}
				}
			}

			function ee(y) {
				if (y.links[y.selectedIdx]) {
					var X = y.links[y.selectedIdx];
					X.focus(), B(X)
				}
			}

			function re(y) {
				y.open && (ie(y, !0), Q(y, !0))
			}

			function U(y) {
				return a(function() {
					y.open ? ie(y) : Q(y)
				})
			}

			function B(y) {
				return function(X) {
					var J = e(this),
						K = J.attr("href");
					if (!St.validClick(X.currentTarget)) {
						X.preventDefault();
						return
					}
					K && K.indexOf("#") === 0 && y.open && ie(y)
				}
			}

			function g(y) {
				return y.outside && o.off("click" + m, y.outside),
					function(X) {
						var J = e(X.target);
						I && J.closest(".w-editor-bem-EditorOverlay").length || v(y, J)
					}
			}
			var v = a(function(y, X) {
				if (y.open) {
					var J = X.closest(".w-nav-menu");
					y.menu.is(J) || ie(y)
				}
			});

			function h(y, X) {
				var J = e.data(X, m),
					K = J.collapsed = J.button.css("display") !== "none";
				if (J.open && !K && !f && ie(J, !0), J.container.length) {
					var le = N(J);
					J.links.each(le), J.dropdowns.each(le)
				}
				J.open && se(J)
			}
			var c = "max-width";

			function N(y) {
				var X = y.container.css(c);
				return X === "none" && (X = ""),
					function(J, K) {
						K = e(K), K.css(c, ""), K.css(c) === "none" && K.css(c, X)
					}
			}

			function G(y, X) {
				X.setAttribute("data-nav-menu-open", "")
			}

			function A(y, X) {
				X.removeAttribute("data-nav-menu-open")
			}

			function Q(y, X) {
				if (y.open) return;
				y.open = !0, y.menu.each(G), y.links.addClass(M), y.dropdowns.addClass(T), y.dropdownToggle.addClass(O), y.dropdownList.addClass(x), y.button.addClass(b);
				var J = y.config,
					K = J.animation;
				(K === "none" || !n.support.transform || J.duration <= 0) && (X = !0);
				var le = se(y),
					Te = y.menu.outerHeight(!0),
					Re = y.menu.outerWidth(!0),
					d = y.el.height(),
					w = y.el[0];
				if (h(0, w), P.intro(0, w), St.redraw.up(), f || o.on("click" + m, y.outside), X) {
					S();
					return
				}
				var R = "transform " + J.duration + "ms " + J.easing;
				if (y.overlay && (V = y.menu.prev(), y.overlay.show().append(y.menu)), J.animOver) {
					n(y.menu).add(R).set({
						x: J.animDirect * Re,
						height: le
					}).start({
						x: 0
					}).then(S), y.overlay && y.overlay.width(Re);
					return
				}
				var q = d + Te;
				n(y.menu).add(R).set({
					y: -q
				}).start({
					y: 0
				}).then(S);

				function S() {
					y.button.attr("aria-expanded", "true")
				}
			}

			function se(y) {
				var X = y.config,
					J = X.docHeight ? o.height() : s.height();
				return X.animOver ? y.menu.height(J) : y.el.css("position") !== "fixed" && (J -= y.el.outerHeight(!0)), y.overlay && y.overlay.height(J), J
			}

			function ie(y, X) {
				if (!y.open) return;
				y.open = !1, y.button.removeClass(b);
				var J = y.config;
				if ((J.animation === "none" || !n.support.transform || J.duration <= 0) && (X = !0), P.outro(0, y.el[0]), o.off("click" + m, y.outside), X) {
					n(y.menu).stop(), w();
					return
				}
				var K = "transform " + J.duration + "ms " + J.easing2,
					le = y.menu.outerHeight(!0),
					Te = y.menu.outerWidth(!0),
					Re = y.el.height();
				if (J.animOver) {
					n(y.menu).add(K).start({
						x: Te * J.animDirect
					}).then(w);
					return
				}
				var d = Re + le;
				n(y.menu).add(K).start({
					y: -d
				}).then(w);

				function w() {
					y.menu.height(""), n(y.menu).set({
						x: 0,
						y: 0
					}), y.menu.each(A), y.links.removeClass(M), y.dropdowns.removeClass(T), y.dropdownToggle.removeClass(O), y.dropdownList.removeClass(x), y.overlay && y.overlay.children().length && (V.length ? y.menu.insertAfter(V) : y.menu.prependTo(y.parent), y.overlay.attr("style", "").hide()), y.el.triggerHandler("w-close"), y.button.attr("aria-expanded", "false")
				}
			}
			return r
		})
	});
	var Zb = l((bz, $b) => {
		"use strict";
		var Ct = qe(),
			QV = Xt(),
			dt = {
				ARROW_LEFT: 37,
				ARROW_UP: 38,
				ARROW_RIGHT: 39,
				ARROW_DOWN: 40,
				SPACE: 32,
				ENTER: 13,
				HOME: 36,
				END: 35
			},
			Qb = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
		Ct.define("slider", $b.exports = function(e, t) {
			var r = {},
				n = e.tram,
				i = e(document),
				o, a, s = Ct.env(),
				u = ".w-slider",
				f = '<div class="w-slider-dot" data-wf-ignore />',
				I = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
				p = "w-slider-force-show",
				E = QV.triggers,
				m, b = !1;
			r.ready = function() {
				a = Ct.env("design"), T()
			}, r.design = function() {
				a = !0, setTimeout(T, 1e3)
			}, r.preview = function() {
				a = !1, T()
			}, r.redraw = function() {
				b = !0, T(), b = !1
			}, r.destroy = O;

			function T() {
				o = i.find(u), o.length && (o.each(P), !m && (O(), x()))
			}

			function O() {
				Ct.resize.off(M), Ct.redraw.off(r.redraw)
			}

			function x() {
				Ct.resize.on(M), Ct.redraw.on(r.redraw)
			}

			function M() {
				o.filter(":visible").each(H)
			}

			function P(g, v) {
				var h = e(v),
					c = e.data(v, u);
				c || (c = e.data(v, u, {
					index: 0,
					depth: 1,
					hasFocus: {
						keyboard: !1,
						mouse: !1
					},
					el: h,
					config: {}
				})), c.mask = h.children(".w-slider-mask"), c.left = h.children(".w-slider-arrow-left"), c.right = h.children(".w-slider-arrow-right"), c.nav = h.children(".w-slider-nav"), c.slides = c.mask.children(".w-slide"), c.slides.each(E.reset), b && (c.maskWidth = 0), h.attr("role") === void 0 && h.attr("role", "region"), h.attr("aria-label") === void 0 && h.attr("aria-label", "carousel");
				var N = c.mask.attr("id");
				if (N || (N = "w-slider-mask-" + g, c.mask.attr("id", N)), !a && !c.ariaLiveLabel && (c.ariaLiveLabel = e(I).appendTo(c.mask)), c.left.attr("role", "button"), c.left.attr("tabindex", "0"), c.left.attr("aria-controls", N), c.left.attr("aria-label") === void 0 && c.left.attr("aria-label", "previous slide"), c.right.attr("role", "button"), c.right.attr("tabindex", "0"), c.right.attr("aria-controls", N), c.right.attr("aria-label") === void 0 && c.right.attr("aria-label", "next slide"), !n.support.transform) {
					c.left.hide(), c.right.hide(), c.nav.hide(), m = !0;
					return
				}
				c.el.off(u), c.left.off(u), c.right.off(u), c.nav.off(u), V(c), a ? (c.el.on("setting" + u, _(c)), C(c), c.hasTimer = !1) : (c.el.on("swipe" + u, _(c)), c.left.on("click" + u, z(c)), c.right.on("click" + u, Y(c)), c.left.on("keydown" + u, $(c, z)), c.right.on("keydown" + u, $(c, Y)), c.nav.on("keydown" + u, "> div", _(c)), c.config.autoplay && !c.hasTimer && (c.hasTimer = !0, c.timerCount = 1, j(c)), c.el.on("mouseenter" + u, D(c, !0, "mouse")), c.el.on("focusin" + u, D(c, !0, "keyboard")), c.el.on("mouseleave" + u, D(c, !1, "mouse")), c.el.on("focusout" + u, D(c, !1, "keyboard"))), c.nav.on("click" + u, "> div", _(c)), s || c.mask.contents().filter(function() {
					return this.nodeType === 3
				}).remove();
				var G = h.filter(":hidden");
				G.addClass(p);
				var A = h.parents(":hidden");
				A.addClass(p), b || H(g, v), G.removeClass(p), A.removeClass(p)
			}

			function V(g) {
				var v = {};
				v.crossOver = 0, v.animation = g.el.attr("data-animation") || "slide", v.animation === "outin" && (v.animation = "cross", v.crossOver = .5), v.easing = g.el.attr("data-easing") || "ease";
				var h = g.el.attr("data-duration");
				if (v.duration = h != null ? parseInt(h, 10) : 500, W(g.el.attr("data-infinite")) && (v.infinite = !0), W(g.el.attr("data-disable-swipe")) && (v.disableSwipe = !0), W(g.el.attr("data-hide-arrows")) ? v.hideArrows = !0 : g.config.hideArrows && (g.left.show(), g.right.show()), W(g.el.attr("data-autoplay"))) {
					v.autoplay = !0, v.delay = parseInt(g.el.attr("data-delay"), 10) || 2e3, v.timerMax = parseInt(g.el.attr("data-autoplay-limit"), 10);
					var c = "mousedown" + u + " touchstart" + u;
					a || g.el.off(c).one(c, function() {
						C(g)
					})
				}
				var N = g.right.width();
				v.edge = N ? N + 40 : 100, g.config = v
			}

			function W(g) {
				return g === "1" || g === "true"
			}

			function D(g, v, h) {
				return function(c) {
					if (v) g.hasFocus[h] = v;
					else if (e.contains(g.el.get(0), c.relatedTarget) || (g.hasFocus[h] = v, g.hasFocus.mouse && h === "keyboard" || g.hasFocus.keyboard && h === "mouse")) return;
					v ? (g.ariaLiveLabel.attr("aria-live", "polite"), g.hasTimer && C(g)) : (g.ariaLiveLabel.attr("aria-live", "off"), g.hasTimer && j(g))
				}
			}

			function $(g, v) {
				return function(h) {
					switch (h.keyCode) {
						case dt.SPACE:
						case dt.ENTER:
							return v(g)(), h.preventDefault(), h.stopPropagation()
					}
				}
			}

			function z(g) {
				return function() {
					k(g, {
						index: g.index - 1,
						vector: -1
					})
				}
			}

			function Y(g) {
				return function() {
					k(g, {
						index: g.index + 1,
						vector: 1
					})
				}
			}

			function te(g, v) {
				var h = null;
				v === g.slides.length && (T(), ee(g)), t.each(g.anchors, function(c, N) {
					e(c.els).each(function(G, A) {
						e(A).index() === v && (h = N)
					})
				}), h != null && k(g, {
					index: h,
					immediate: !0
				})
			}

			function j(g) {
				C(g);
				var v = g.config,
					h = v.timerMax;
				h && g.timerCount++ > h || (g.timerId = window.setTimeout(function() {
					g.timerId == null || a || (Y(g)(), j(g))
				}, v.delay))
			}

			function C(g) {
				window.clearTimeout(g.timerId), g.timerId = null
			}

			function _(g) {
				return function(v, h) {
					h = h || {};
					var c = g.config;
					if (a && v.type === "setting") {
						if (h.select === "prev") return z(g)();
						if (h.select === "next") return Y(g)();
						if (V(g), ee(g), h.select == null) return;
						te(g, h.select);
						return
					}
					if (v.type === "swipe") return c.disableSwipe || Ct.env("editor") ? void 0 : h.direction === "left" ? Y(g)() : h.direction === "right" ? z(g)() : void 0;
					if (g.nav.has(v.target).length) {
						var N = e(v.target).index();
						if (v.type === "click" && k(g, {
								index: N
							}), v.type === "keydown") switch (v.keyCode) {
							case dt.ENTER:
							case dt.SPACE:
								{
									k(g, {
										index: N
									}),
									v.preventDefault();
									break
								}
							case dt.ARROW_LEFT:
							case dt.ARROW_UP:
								{
									L(g.nav, Math.max(N - 1, 0)),
									v.preventDefault();
									break
								}
							case dt.ARROW_RIGHT:
							case dt.ARROW_DOWN:
								{
									L(g.nav, Math.min(N + 1, g.pages)),
									v.preventDefault();
									break
								}
							case dt.HOME:
								{
									L(g.nav, 0),
									v.preventDefault();
									break
								}
							case dt.END:
								{
									L(g.nav, g.pages),
									v.preventDefault();
									break
								}
							default:
								return
						}
					}
				}
			}

			function L(g, v) {
				var h = g.children().eq(v).focus();
				g.children().not(h)
			}

			function k(g, v) {
				v = v || {};
				var h = g.config,
					c = g.anchors;
				g.previous = g.index;
				var N = v.index,
					G = {};
				N < 0 ? (N = c.length - 1, h.infinite && (G.x = -g.endX, G.from = 0, G.to = c[0].width)) : N >= c.length && (N = 0, h.infinite && (G.x = c[c.length - 1].width, G.from = -c[c.length - 1].x, G.to = G.from - G.x)), g.index = N;
				var A = g.nav.children().eq(N).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
				g.nav.children().not(A).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"), h.hideArrows && (g.index === c.length - 1 ? g.right.hide() : g.right.show(), g.index === 0 ? g.left.hide() : g.left.show());
				var Q = g.offsetX || 0,
					se = g.offsetX = -c[g.index].x,
					ie = {
						x: se,
						opacity: 1,
						visibility: ""
					},
					y = e(c[g.index].els),
					X = e(c[g.previous] && c[g.previous].els),
					J = g.slides.not(y),
					K = h.animation,
					le = h.easing,
					Te = Math.round(h.duration),
					Re = v.vector || (g.index > g.previous ? 1 : -1),
					d = "opacity " + Te + "ms " + le,
					w = "transform " + Te + "ms " + le;
				if (y.find(Qb).removeAttr("tabindex"), y.removeAttr("aria-hidden"), y.find("*").removeAttr("aria-hidden"), J.find(Qb).attr("tabindex", "-1"), J.attr("aria-hidden", "true"), J.find("*").attr("aria-hidden", "true"), a || (y.each(E.intro), J.each(E.outro)), v.immediate && !b) {
					n(y).set(ie), S();
					return
				}
				if (g.index === g.previous) return;
				if (a || g.ariaLiveLabel.text(`Slide ${N+1} of ${c.length}.`), K === "cross") {
					var R = Math.round(Te - Te * h.crossOver),
						q = Math.round(Te - R);
					d = "opacity " + R + "ms " + le, n(X).set({
						visibility: ""
					}).add(d).start({
						opacity: 0
					}), n(y).set({
						visibility: "",
						x: se,
						opacity: 0,
						zIndex: g.depth++
					}).add(d).wait(q).then({
						opacity: 1
					}).then(S);
					return
				}
				if (K === "fade") {
					n(X).set({
						visibility: ""
					}).stop(), n(y).set({
						visibility: "",
						x: se,
						opacity: 0,
						zIndex: g.depth++
					}).add(d).start({
						opacity: 1
					}).then(S);
					return
				}
				if (K === "over") {
					ie = {
						x: g.endX
					}, n(X).set({
						visibility: ""
					}).stop(), n(y).set({
						visibility: "",
						zIndex: g.depth++,
						x: se + c[g.index].width * Re
					}).add(w).start({
						x: se
					}).then(S);
					return
				}
				h.infinite && G.x ? (n(g.slides.not(X)).set({
					visibility: "",
					x: G.x
				}).add(w).start({
					x: se
				}), n(X).set({
					visibility: "",
					x: G.from
				}).add(w).start({
					x: G.to
				}), g.shifted = X) : (h.infinite && g.shifted && (n(g.shifted).set({
					visibility: "",
					x: Q
				}), g.shifted = null), n(g.slides).set({
					visibility: ""
				}).add(w).start({
					x: se
				}));

				function S() {
					y = e(c[g.index].els), J = g.slides.not(y), K !== "slide" && (ie.visibility = "hidden"), n(J).set(ie)
				}
			}

			function H(g, v) {
				var h = e.data(v, u);
				if (h) {
					if (U(h)) return ee(h);
					a && B(h) && ee(h)
				}
			}

			function ee(g) {
				var v = 1,
					h = 0,
					c = 0,
					N = 0,
					G = g.maskWidth,
					A = G - g.config.edge;
				A < 0 && (A = 0), g.anchors = [{
					els: [],
					x: 0,
					width: 0
				}], g.slides.each(function(se, ie) {
					c - h > A && (v++, h += G, g.anchors[v - 1] = {
						els: [],
						x: c,
						width: 0
					}), N = e(ie).outerWidth(!0), c += N, g.anchors[v - 1].width += N, g.anchors[v - 1].els.push(ie);
					var y = se + 1 + " of " + g.slides.length;
					e(ie).attr("aria-label", y), e(ie).attr("role", "group")
				}), g.endX = c, a && (g.pages = null), g.nav.length && g.pages !== v && (g.pages = v, re(g));
				var Q = g.index;
				Q >= v && (Q = v - 1), k(g, {
					immediate: !0,
					index: Q
				})
			}

			function re(g) {
				var v = [],
					h, c = g.el.attr("data-nav-spacing");
				c && (c = parseFloat(c) + "px");
				for (var N = 0, G = g.pages; N < G; N++) h = e(f), h.attr("aria-label", "Show slide " + (N + 1) + " of " + G).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"), g.nav.hasClass("w-num") && h.text(N + 1), c != null && h.css({
					"margin-left": c,
					"margin-right": c
				}), v.push(h);
				g.nav.empty().append(v)
			}

			function U(g) {
				var v = g.mask.width();
				return g.maskWidth !== v ? (g.maskWidth = v, !0) : !1
			}

			function B(g) {
				var v = 0;
				return g.slides.each(function(h, c) {
					v += e(c).outerWidth(!0)
				}), g.slidesWidth !== v ? (g.slidesWidth = v, !0) : !1
			}
			return r
		})
	});
	var e_ = l((_z, Jb) => {
		"use strict";
		var Rt = qe(),
			$V = Xt();
		Rt.define("tabs", Jb.exports = function(e) {
			var t = {},
				r = e.tram,
				n = e(document),
				i, o, a = Rt.env,
				s = a.safari,
				u = a(),
				f = "data-w-tab",
				I = "data-w-pane",
				p = ".w-tabs",
				E = "w--current",
				m = "w--tab-active",
				b = $V.triggers,
				T = !1;
			t.ready = t.design = t.preview = O, t.redraw = function() {
				T = !0, O(), T = !1
			}, t.destroy = function() {
				i = n.find(p), i.length && (i.each(P), x())
			};

			function O() {
				o = u && Rt.env("design"), i = n.find(p), i.length && (i.each(V), Rt.env("preview") && !T && i.each(P), x(), M())
			}

			function x() {
				Rt.redraw.off(t.redraw)
			}

			function M() {
				Rt.redraw.on(t.redraw)
			}

			function P(j, C) {
				var _ = e.data(C, p);
				_ && (_.links && _.links.each(b.reset), _.panes && _.panes.each(b.reset))
			}

			function V(j, C) {
				var _ = p.substr(1) + "-" + j,
					L = e(C),
					k = e.data(C, p);
				if (k || (k = e.data(C, p, {
						el: L,
						config: {}
					})), k.current = null, k.tabIdentifier = _ + "-" + f, k.paneIdentifier = _ + "-" + I, k.menu = L.children(".w-tab-menu"), k.links = k.menu.children(".w-tab-link"), k.content = L.children(".w-tab-content"), k.panes = k.content.children(".w-tab-pane"), k.el.off(p), k.links.off(p), k.menu.attr("role", "tablist"), k.links.attr("tabindex", "-1"), W(k), !o) {
					k.links.on("click" + p, $(k)), k.links.on("keydown" + p, z(k));
					var H = k.links.filter("." + E),
						ee = H.attr(f);
					ee && Y(k, {
						tab: ee,
						immediate: !0
					})
				}
			}

			function W(j) {
				var C = {};
				C.easing = j.el.attr("data-easing") || "ease";
				var _ = parseInt(j.el.attr("data-duration-in"), 10);
				_ = C.intro = _ === _ ? _ : 0;
				var L = parseInt(j.el.attr("data-duration-out"), 10);
				L = C.outro = L === L ? L : 0, C.immediate = !_ && !L, j.config = C
			}

			function D(j) {
				var C = j.current;
				return Array.prototype.findIndex.call(j.links, _ => _.getAttribute(f) === C, null)
			}

			function $(j) {
				return function(C) {
					C.preventDefault();
					var _ = C.currentTarget.getAttribute(f);
					_ && Y(j, {
						tab: _
					})
				}
			}

			function z(j) {
				return function(C) {
					var _ = D(j),
						L = C.key,
						k = {
							ArrowLeft: _ - 1,
							ArrowUp: _ - 1,
							ArrowRight: _ + 1,
							ArrowDown: _ + 1,
							End: j.links.length - 1,
							Home: 0
						};
					if (L in k) {
						C.preventDefault();
						var H = k[L];
						H === -1 && (H = j.links.length - 1), H === j.links.length && (H = 0);
						var ee = j.links[H],
							re = ee.getAttribute(f);
						re && Y(j, {
							tab: re
						})
					}
				}
			}

			function Y(j, C) {
				C = C || {};
				var _ = j.config,
					L = _.easing,
					k = C.tab;
				if (k !== j.current) {
					j.current = k;
					var H;
					j.links.each(function(h, c) {
						var N = e(c);
						if (C.immediate || _.immediate) {
							var G = j.panes[h];
							c.id || (c.id = j.tabIdentifier + "-" + h), G.id || (G.id = j.paneIdentifier + "-" + h), c.href = "#" + G.id, c.setAttribute("role", "tab"), c.setAttribute("aria-controls", G.id), c.setAttribute("aria-selected", "false"), G.setAttribute("role", "tabpanel"), G.setAttribute("aria-labelledby", c.id)
						}
						c.getAttribute(f) === k ? (H = c, N.addClass(E).removeAttr("tabindex").attr({
							"aria-selected": "true"
						}).each(b.intro)) : N.hasClass(E) && N.removeClass(E).attr({
							tabindex: "-1",
							"aria-selected": "false"
						}).each(b.outro)
					});
					var ee = [],
						re = [];
					j.panes.each(function(h, c) {
						var N = e(c);
						c.getAttribute(f) === k ? ee.push(c) : N.hasClass(m) && re.push(c)
					});
					var U = e(ee),
						B = e(re);
					if (C.immediate || _.immediate) {
						U.addClass(m).each(b.intro), B.removeClass(m), T || Rt.redraw.up();
						return
					} else {
						var g = window.scrollX,
							v = window.scrollY;
						H.focus(), window.scrollTo(g, v)
					}
					B.length && _.outro ? (B.each(b.outro), r(B).add("opacity " + _.outro + "ms " + L, {
						fallback: s
					}).start({
						opacity: 0
					}).then(() => te(_, B, U))) : te(_, B, U)
				}
			}

			function te(j, C, _) {
				if (C.removeClass(m).css({
						opacity: "",
						transition: "",
						transform: "",
						width: "",
						height: ""
					}), _.addClass(m).each(b.intro), Rt.redraw.up(), !j.intro) return r(_).set({
					opacity: 1
				});
				r(_).set({
					opacity: 0
				}).redraw().add("opacity " + j.intro + "ms " + j.easing, {
					fallback: s
				}).start({
					opacity: 1
				})
			}
			return t
		})
	});
	Qs();
	Zs();
	tu();
	Xt();
	Pb();
	Mb();
	Db();
	Gb();
	Hb();
	Bb();
	zb();
	Yb();
	Zb();
	e_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
	"events": {
		"e-25": {
			"id": "e-25",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-7",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-26"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"selector": ".link-categoria-shop",
				"originalId": "578ebe17-8971-50c4-988a-9719a235ab88",
				"appliesTo": "CLASS"
			},
			"targets": [{
				"selector": ".link-categoria-shop",
				"originalId": "578ebe17-8971-50c4-988a-9719a235ab88",
				"appliesTo": "CLASS"
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713694461924
		},
		"e-27": {
			"id": "e-27",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-8",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-28"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|62a3d15a-55f4-c712-aba0-1ddabe8a7954",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|62a3d15a-55f4-c712-aba0-1ddabe8a7954",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713694880723
		},
		"e-31": {
			"id": "e-31",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-9",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-32"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "578ebe17-8971-50c4-988a-9719a235ab8c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "578ebe17-8971-50c4-988a-9719a235ab8c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713696719625
		},
		"e-33": {
			"id": "e-33",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-10",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-34"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|27b5fc52-6821-47a5-1cb4-1640ad869509",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|27b5fc52-6821-47a5-1cb4-1640ad869509",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713696952212
		},
		"e-35": {
			"id": "e-35",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-10",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-36"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|3e682244-721b-da4f-7008-2f16ef45278a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|3e682244-721b-da4f-7008-2f16ef45278a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713698567513
		},
		"e-37": {
			"id": "e-37",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-11",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-38"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "578ebe17-8971-50c4-988a-9719a235ab90",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "578ebe17-8971-50c4-988a-9719a235ab90",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713699572306
		},
		"e-39": {
			"id": "e-39",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-12",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-40"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|3e682244-721b-da4f-7008-2f16ef45278a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|3e682244-721b-da4f-7008-2f16ef45278a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713699910804
		},
		"e-41": {
			"id": "e-41",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-13",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-42"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|ec99f017-2224-acc3-4251-45783fc24c93",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|ec99f017-2224-acc3-4251-45783fc24c93",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713729147238
		},
		"e-43": {
			"id": "e-43",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-14",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-44"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "578ebe17-8971-50c4-988a-9719a235ab94",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "578ebe17-8971-50c4-988a-9719a235ab94",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713729254599
		},
		"e-45": {
			"id": "e-45",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-15",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-46"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|2ffc109d-237c-582a-2f3e-142aa906a4e7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|2ffc109d-237c-582a-2f3e-142aa906a4e7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713731495677
		},
		"e-47": {
			"id": "e-47",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-16",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-48"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "578ebe17-8971-50c4-988a-9719a235abb4",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "578ebe17-8971-50c4-988a-9719a235abb4",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713731593060
		},
		"e-49": {
			"id": "e-49",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-17",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-50"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|5acd13f4-061a-2788-a5f5-6d81ac98719f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|5acd13f4-061a-2788-a5f5-6d81ac98719f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713732539166
		},
		"e-51": {
			"id": "e-51",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-18",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-52"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|f8dbf73a-c879-3fdd-cf66-5098708fedbf",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|f8dbf73a-c879-3fdd-cf66-5098708fedbf",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713776198261
		},
		"e-52": {
			"id": "e-52",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-19",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-51"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|f8dbf73a-c879-3fdd-cf66-5098708fedbf",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|f8dbf73a-c879-3fdd-cf66-5098708fedbf",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713776198262
		},
		"e-53": {
			"id": "e-53",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-18",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-54"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|0ef54aff-d161-3352-5721-bed165c2d112",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|0ef54aff-d161-3352-5721-bed165c2d112",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713782780971
		},
		"e-54": {
			"id": "e-54",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-19",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-53"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|0ef54aff-d161-3352-5721-bed165c2d112",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|0ef54aff-d161-3352-5721-bed165c2d112",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713782780971
		},
		"e-55": {
			"id": "e-55",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-18",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-56"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|fe4c5e84-2efd-9153-742c-5cd2e260d3db",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|fe4c5e84-2efd-9153-742c-5cd2e260d3db",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713782781574
		},
		"e-56": {
			"id": "e-56",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-19",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-55"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|fe4c5e84-2efd-9153-742c-5cd2e260d3db",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|fe4c5e84-2efd-9153-742c-5cd2e260d3db",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713782781574
		},
		"e-57": {
			"id": "e-57",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-18",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-58"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|f9948cf0-8449-2e9e-3ec9-957de4d51dbc",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|f9948cf0-8449-2e9e-3ec9-957de4d51dbc",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713782782725
		},
		"e-58": {
			"id": "e-58",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-19",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-57"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|f9948cf0-8449-2e9e-3ec9-957de4d51dbc",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|f9948cf0-8449-2e9e-3ec9-957de4d51dbc",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713782782725
		},
		"e-59": {
			"id": "e-59",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-18",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-60"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|4e8fe835-5e37-3946-9e9b-86601d766bc2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|4e8fe835-5e37-3946-9e9b-86601d766bc2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713782783722
		},
		"e-60": {
			"id": "e-60",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-19",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-59"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|4e8fe835-5e37-3946-9e9b-86601d766bc2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|4e8fe835-5e37-3946-9e9b-86601d766bc2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713782783722
		},
		"e-61": {
			"id": "e-61",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-18",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-62"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|d388e5cd-9c01-d070-4b06-febc2d15b3d6",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|d388e5cd-9c01-d070-4b06-febc2d15b3d6",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713782784078
		},
		"e-62": {
			"id": "e-62",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-19",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-61"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|d388e5cd-9c01-d070-4b06-febc2d15b3d6",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|d388e5cd-9c01-d070-4b06-febc2d15b3d6",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713782784078
		},
		"e-63": {
			"id": "e-63",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-18",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-64"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|568892b7-0297-65f1-79ef-da2aa02a5fc4",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|568892b7-0297-65f1-79ef-da2aa02a5fc4",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713782786802
		},
		"e-64": {
			"id": "e-64",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-19",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-63"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|568892b7-0297-65f1-79ef-da2aa02a5fc4",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|568892b7-0297-65f1-79ef-da2aa02a5fc4",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713782786802
		},
		"e-65": {
			"id": "e-65",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-18",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-66"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|bd09b73f-1843-413d-4266-4dd687fa50b6",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|bd09b73f-1843-413d-4266-4dd687fa50b6",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713782866539
		},
		"e-66": {
			"id": "e-66",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-19",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-65"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|bd09b73f-1843-413d-4266-4dd687fa50b6",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|bd09b73f-1843-413d-4266-4dd687fa50b6",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713782866539
		},
		"e-67": {
			"id": "e-67",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-68"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|7e10038c-08c5-9a58-a66f-225613f3722c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|7e10038c-08c5-9a58-a66f-225613f3722c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713789853143
		},
		"e-68": {
			"id": "e-68",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-67"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|7e10038c-08c5-9a58-a66f-225613f3722c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|7e10038c-08c5-9a58-a66f-225613f3722c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713789853143
		},
		"e-69": {
			"id": "e-69",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-70"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|b34f266e-ee7a-66ae-0a4c-07b84ad3f095",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|b34f266e-ee7a-66ae-0a4c-07b84ad3f095",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713790435471
		},
		"e-70": {
			"id": "e-70",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-69"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|b34f266e-ee7a-66ae-0a4c-07b84ad3f095",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|b34f266e-ee7a-66ae-0a4c-07b84ad3f095",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713790435471
		},
		"e-71": {
			"id": "e-71",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-72"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|27e7bec3-5db2-6bfa-aefa-697cc707114e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|27e7bec3-5db2-6bfa-aefa-697cc707114e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713796230998
		},
		"e-72": {
			"id": "e-72",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-71"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|27e7bec3-5db2-6bfa-aefa-697cc707114e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|27e7bec3-5db2-6bfa-aefa-697cc707114e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713796230998
		},
		"e-73": {
			"id": "e-73",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-74"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|2b20344c-e948-4898-8973-3dad7aa05e80",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|2b20344c-e948-4898-8973-3dad7aa05e80",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713796404613
		},
		"e-74": {
			"id": "e-74",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-73"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|2b20344c-e948-4898-8973-3dad7aa05e80",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|2b20344c-e948-4898-8973-3dad7aa05e80",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713796404613
		},
		"e-77": {
			"id": "e-77",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-23",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-78"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|1ea0adc5-8d47-d34f-bc8d-8756cc84d8cd",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|1ea0adc5-8d47-d34f-bc8d-8756cc84d8cd",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713883204301
		},
		"e-79": {
			"id": "e-79",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-80"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|be05d753-6677-03ea-f300-5281a864002d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|be05d753-6677-03ea-f300-5281a864002d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713887654988
		},
		"e-80": {
			"id": "e-80",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-79"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|be05d753-6677-03ea-f300-5281a864002d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|be05d753-6677-03ea-f300-5281a864002d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713887654988
		},
		"e-81": {
			"id": "e-81",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-82"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|542edf1e-c0c0-d542-4ee1-bb9e8cf087d5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|542edf1e-c0c0-d542-4ee1-bb9e8cf087d5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713944049040
		},
		"e-82": {
			"id": "e-82",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-81"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|542edf1e-c0c0-d542-4ee1-bb9e8cf087d5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|542edf1e-c0c0-d542-4ee1-bb9e8cf087d5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713944049040
		},
		"e-83": {
			"id": "e-83",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-84"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|3ca8f5c9-86a8-2f14-880a-822fb4893eaf",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|3ca8f5c9-86a8-2f14-880a-822fb4893eaf",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713944440636
		},
		"e-84": {
			"id": "e-84",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-83"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|3ca8f5c9-86a8-2f14-880a-822fb4893eaf",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|3ca8f5c9-86a8-2f14-880a-822fb4893eaf",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713944440636
		},
		"e-85": {
			"id": "e-85",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-86"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|0d9847bd-6c7e-fa10-b34e-d5dd65fd9fa7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|0d9847bd-6c7e-fa10-b34e-d5dd65fd9fa7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713944717238
		},
		"e-86": {
			"id": "e-86",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-85"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|0d9847bd-6c7e-fa10-b34e-d5dd65fd9fa7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|0d9847bd-6c7e-fa10-b34e-d5dd65fd9fa7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1713944717238
		},
		"e-89": {
			"id": "e-89",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-25",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-90"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|9ca3e7ba-cf03-2dee-40ab-1ceeb7d37609",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|9ca3e7ba-cf03-2dee-40ab-1ceeb7d37609",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714035636799
		},
		"e-91": {
			"id": "e-91",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-17",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-92"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|63b60c3a-924d-e863-4a96-3fe61b498e2d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|63b60c3a-924d-e863-4a96-3fe61b498e2d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714055641627
		},
		"e-95": {
			"id": "e-95",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-27",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-96"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|bfe7f505-e916-c814-f25e-91adde663b7b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|bfe7f505-e916-c814-f25e-91adde663b7b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714129895348
		},
		"e-97": {
			"id": "e-97",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-26",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-98"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|cf28ffc2-cd82-5314-a7e4-1ceb538c3044",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|cf28ffc2-cd82-5314-a7e4-1ceb538c3044",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714132448276
		},
		"e-103": {
			"id": "e-103",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-28",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-104"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|ef094525-760f-ef98-46e6-b63e56d070ba",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|ef094525-760f-ef98-46e6-b63e56d070ba",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714138073590
		},
		"e-104": {
			"id": "e-104",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-29",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-103"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|ef094525-760f-ef98-46e6-b63e56d070ba",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|ef094525-760f-ef98-46e6-b63e56d070ba",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714138073591
		},
		"e-105": {
			"id": "e-105",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-30",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-106"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|ef094525-760f-ef98-46e6-b63e56d070ba",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|ef094525-760f-ef98-46e6-b63e56d070ba",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714138616570
		},
		"e-107": {
			"id": "e-107",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-31",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-108"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|ef094525-760f-ef98-46e6-b63e56d070ba",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|ef094525-760f-ef98-46e6-b63e56d070ba",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714141507587
		},
		"e-108": {
			"id": "e-108",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-32",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-107"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|ef094525-760f-ef98-46e6-b63e56d070ba",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|ef094525-760f-ef98-46e6-b63e56d070ba",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714141507587
		},
		"e-109": {
			"id": "e-109",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-33",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-110"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|c5dfa68b-cad3-b1e0-ebbd-6322db8c455a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|c5dfa68b-cad3-b1e0-ebbd-6322db8c455a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714204506354
		},
		"e-110": {
			"id": "e-110",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-34",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-109"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|c5dfa68b-cad3-b1e0-ebbd-6322db8c455a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|c5dfa68b-cad3-b1e0-ebbd-6322db8c455a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714204506355
		},
		"e-111": {
			"id": "e-111",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-35",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-112"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|c5dfa68b-cad3-b1e0-ebbd-6322db8c455a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|c5dfa68b-cad3-b1e0-ebbd-6322db8c455a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714213478620
		},
		"e-112": {
			"id": "e-112",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-36",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-111"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|c5dfa68b-cad3-b1e0-ebbd-6322db8c455a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|c5dfa68b-cad3-b1e0-ebbd-6322db8c455a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714213478621
		},
		"e-113": {
			"id": "e-113",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-37",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-114"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|29fedbd6-057a-9b4f-1d58-564e1375c44b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|29fedbd6-057a-9b4f-1d58-564e1375c44b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714217192901
		},
		"e-114": {
			"id": "e-114",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-113"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|29fedbd6-057a-9b4f-1d58-564e1375c44b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|29fedbd6-057a-9b4f-1d58-564e1375c44b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714217192902
		},
		"e-115": {
			"id": "e-115",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-39",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-116"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|29fedbd6-057a-9b4f-1d58-564e1375c44b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|29fedbd6-057a-9b4f-1d58-564e1375c44b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714217445109
		},
		"e-116": {
			"id": "e-116",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-40",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-115"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|29fedbd6-057a-9b4f-1d58-564e1375c44b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|29fedbd6-057a-9b4f-1d58-564e1375c44b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714217445109
		},
		"e-117": {
			"id": "e-117",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-37",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-118"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|5e33503c-a4da-d322-4ec2-032fc4847778",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|5e33503c-a4da-d322-4ec2-032fc4847778",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714218151297
		},
		"e-118": {
			"id": "e-118",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-117"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|5e33503c-a4da-d322-4ec2-032fc4847778",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|5e33503c-a4da-d322-4ec2-032fc4847778",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714218151298
		},
		"e-119": {
			"id": "e-119",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-39",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-120"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|5e33503c-a4da-d322-4ec2-032fc4847778",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|5e33503c-a4da-d322-4ec2-032fc4847778",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714218223047
		},
		"e-120": {
			"id": "e-120",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-40",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-119"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|5e33503c-a4da-d322-4ec2-032fc4847778",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|5e33503c-a4da-d322-4ec2-032fc4847778",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714218223073
		},
		"e-121": {
			"id": "e-121",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-37",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-122"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|daad9dfc-9924-171d-584c-8dcb0e85e0cd",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|daad9dfc-9924-171d-584c-8dcb0e85e0cd",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714226723162
		},
		"e-122": {
			"id": "e-122",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-121"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|daad9dfc-9924-171d-584c-8dcb0e85e0cd",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|daad9dfc-9924-171d-584c-8dcb0e85e0cd",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714226723162
		},
		"e-123": {
			"id": "e-123",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-39",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-124"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|daad9dfc-9924-171d-584c-8dcb0e85e0cd",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|daad9dfc-9924-171d-584c-8dcb0e85e0cd",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714226723162
		},
		"e-124": {
			"id": "e-124",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-40",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-123"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|daad9dfc-9924-171d-584c-8dcb0e85e0cd",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|daad9dfc-9924-171d-584c-8dcb0e85e0cd",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714226723162
		},
		"e-125": {
			"id": "e-125",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-26",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-126"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|daad9dfc-9924-171d-584c-8dcb0e85e107",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|daad9dfc-9924-171d-584c-8dcb0e85e107",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714226723162
		},
		"e-127": {
			"id": "e-127",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-35",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-128"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|daad9dfc-9924-171d-584c-8dcb0e85e118",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|daad9dfc-9924-171d-584c-8dcb0e85e118",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714226723162
		},
		"e-128": {
			"id": "e-128",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-36",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-127"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|daad9dfc-9924-171d-584c-8dcb0e85e118",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|daad9dfc-9924-171d-584c-8dcb0e85e118",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714226723162
		},
		"e-129": {
			"id": "e-129",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-33",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-130"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|daad9dfc-9924-171d-584c-8dcb0e85e118",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|daad9dfc-9924-171d-584c-8dcb0e85e118",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714226723162
		},
		"e-130": {
			"id": "e-130",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-34",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-129"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|daad9dfc-9924-171d-584c-8dcb0e85e118",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|daad9dfc-9924-171d-584c-8dcb0e85e118",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714226723162
		},
		"e-131": {
			"id": "e-131",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-27",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-132"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|1b1a24a4-a2e4-425b-b82d-92b0f8e0ccf3",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|1b1a24a4-a2e4-425b-b82d-92b0f8e0ccf3",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714230992843
		},
		"e-133": {
			"id": "e-133",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-26",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-134"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|be327aba-8564-5dd7-22f6-7952299224b9",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|be327aba-8564-5dd7-22f6-7952299224b9",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714233822722
		},
		"e-135": {
			"id": "e-135",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-26",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-136"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|be327aba-8564-5dd7-22f6-7952299224bb",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|be327aba-8564-5dd7-22f6-7952299224bb",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714233822722
		},
		"e-139": {
			"id": "e-139",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-140"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|1fdfd020-f2ee-855e-4fd9-f5b657d40d2b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|1fdfd020-f2ee-855e-4fd9-f5b657d40d2b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714233853898
		},
		"e-140": {
			"id": "e-140",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-139"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|1fdfd020-f2ee-855e-4fd9-f5b657d40d2b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|1fdfd020-f2ee-855e-4fd9-f5b657d40d2b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714233853898
		},
		"e-141": {
			"id": "e-141",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-25",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-142"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|1fdfd020-f2ee-855e-4fd9-f5b657d40d37",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|1fdfd020-f2ee-855e-4fd9-f5b657d40d37",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714233853898
		},
		"e-143": {
			"id": "e-143",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-144"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|1fdfd020-f2ee-855e-4fd9-f5b657d40d67",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|1fdfd020-f2ee-855e-4fd9-f5b657d40d67",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714233853898
		},
		"e-144": {
			"id": "e-144",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-143"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|1fdfd020-f2ee-855e-4fd9-f5b657d40d67",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|1fdfd020-f2ee-855e-4fd9-f5b657d40d67",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714233853898
		},
		"e-145": {
			"id": "e-145",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-146"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|1fdfd020-f2ee-855e-4fd9-f5b657d40d87",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|1fdfd020-f2ee-855e-4fd9-f5b657d40d87",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714233853898
		},
		"e-146": {
			"id": "e-146",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-145"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|1fdfd020-f2ee-855e-4fd9-f5b657d40d87",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|1fdfd020-f2ee-855e-4fd9-f5b657d40d87",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714233853898
		},
		"e-147": {
			"id": "e-147",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-148"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|1fdfd020-f2ee-855e-4fd9-f5b657d40d9b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|1fdfd020-f2ee-855e-4fd9-f5b657d40d9b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714233853898
		},
		"e-148": {
			"id": "e-148",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-147"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|1fdfd020-f2ee-855e-4fd9-f5b657d40d9b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|1fdfd020-f2ee-855e-4fd9-f5b657d40d9b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714233853898
		},
		"e-149": {
			"id": "e-149",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-26",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-150"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|1fdfd020-f2ee-855e-4fd9-f5b657d40dc5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|1fdfd020-f2ee-855e-4fd9-f5b657d40dc5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714233853898
		},
		"e-151": {
			"id": "e-151",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-23",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-152"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|1fdfd020-f2ee-855e-4fd9-f5b657d40dd0",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|1fdfd020-f2ee-855e-4fd9-f5b657d40dd0",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714233853898
		},
		"e-153": {
			"id": "e-153",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-154"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|2108b8f7-855a-0078-4420-98779fd3ed19",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|2108b8f7-855a-0078-4420-98779fd3ed19",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714233876075
		},
		"e-154": {
			"id": "e-154",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-153"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|2108b8f7-855a-0078-4420-98779fd3ed19",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|2108b8f7-855a-0078-4420-98779fd3ed19",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714233876075
		},
		"e-155": {
			"id": "e-155",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-156"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|2108b8f7-855a-0078-4420-98779fd3ed5d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|2108b8f7-855a-0078-4420-98779fd3ed5d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714233876075
		},
		"e-156": {
			"id": "e-156",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-155"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|2108b8f7-855a-0078-4420-98779fd3ed5d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|2108b8f7-855a-0078-4420-98779fd3ed5d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714233876075
		},
		"e-157": {
			"id": "e-157",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-158"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|2108b8f7-855a-0078-4420-98779fd3ed8c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|2108b8f7-855a-0078-4420-98779fd3ed8c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714233876075
		},
		"e-158": {
			"id": "e-158",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-157"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|2108b8f7-855a-0078-4420-98779fd3ed8c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|2108b8f7-855a-0078-4420-98779fd3ed8c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714233876075
		},
		"e-159": {
			"id": "e-159",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-160"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|2108b8f7-855a-0078-4420-98779fd3eda6",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|2108b8f7-855a-0078-4420-98779fd3eda6",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714233876075
		},
		"e-160": {
			"id": "e-160",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-159"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "662d0541f7bad2fd620162b9|2108b8f7-855a-0078-4420-98779fd3eda6",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "662d0541f7bad2fd620162b9|2108b8f7-855a-0078-4420-98779fd3eda6",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1714233876075
		},
		"e-161": {
			"id": "e-161",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-39",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-162"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|6def1c94-e4d9-f36e-ec4b-92e5c3b94af2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|6def1c94-e4d9-f36e-ec4b-92e5c3b94af2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715702475837
		},
		"e-162": {
			"id": "e-162",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-40",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-161"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|6def1c94-e4d9-f36e-ec4b-92e5c3b94af2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|6def1c94-e4d9-f36e-ec4b-92e5c3b94af2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715702475837
		},
		"e-163": {
			"id": "e-163",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-37",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-164"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|6def1c94-e4d9-f36e-ec4b-92e5c3b94af2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|6def1c94-e4d9-f36e-ec4b-92e5c3b94af2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715702475837
		},
		"e-164": {
			"id": "e-164",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-163"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|6def1c94-e4d9-f36e-ec4b-92e5c3b94af2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|6def1c94-e4d9-f36e-ec4b-92e5c3b94af2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715702475837
		},
		"e-165": {
			"id": "e-165",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-26",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-166"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|6def1c94-e4d9-f36e-ec4b-92e5c3b94b2c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|6def1c94-e4d9-f36e-ec4b-92e5c3b94b2c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715702475837
		},
		"e-167": {
			"id": "e-167",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-35",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-168"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|6def1c94-e4d9-f36e-ec4b-92e5c3b94b3d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|6def1c94-e4d9-f36e-ec4b-92e5c3b94b3d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715702475837
		},
		"e-168": {
			"id": "e-168",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-36",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-167"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|6def1c94-e4d9-f36e-ec4b-92e5c3b94b3d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|6def1c94-e4d9-f36e-ec4b-92e5c3b94b3d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715702475837
		},
		"e-169": {
			"id": "e-169",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-33",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-170"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|6def1c94-e4d9-f36e-ec4b-92e5c3b94b3d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|6def1c94-e4d9-f36e-ec4b-92e5c3b94b3d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715702475837
		},
		"e-170": {
			"id": "e-170",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-34",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-169"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|6def1c94-e4d9-f36e-ec4b-92e5c3b94b3d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|6def1c94-e4d9-f36e-ec4b-92e5c3b94b3d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715702475837
		},
		"e-225": {
			"id": "e-225",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-42",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-226"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|75d2b87c-f770-13fa-dd1d-d349fc5bbcc2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|75d2b87c-f770-13fa-dd1d-d349fc5bbcc2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715715973324
		},
		"e-227": {
			"id": "e-227",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-43",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-228"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|106e0ab5-2fa6-7d4e-be8c-95a1be9fe1ce",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|106e0ab5-2fa6-7d4e-be8c-95a1be9fe1ce",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715722131219
		},
		"e-233": {
			"id": "e-233",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-51",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-234"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|573ebc0c-c752-1a96-7dcf-9d2d875a0931",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|573ebc0c-c752-1a96-7dcf-9d2d875a0931",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715763251873
		},
		"e-234": {
			"id": "e-234",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-52",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-233"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|573ebc0c-c752-1a96-7dcf-9d2d875a0931",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|573ebc0c-c752-1a96-7dcf-9d2d875a0931",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715763251875
		},
		"e-235": {
			"id": "e-235",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-53",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-236"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|573ebc0c-c752-1a96-7dcf-9d2d875a0931",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|573ebc0c-c752-1a96-7dcf-9d2d875a0931",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715767726264
		},
		"e-236": {
			"id": "e-236",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-58",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-235"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|573ebc0c-c752-1a96-7dcf-9d2d875a0931",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|573ebc0c-c752-1a96-7dcf-9d2d875a0931",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715767726267
		},
		"e-237": {
			"id": "e-237",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-55",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-238"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|e33a25a9-ddeb-d0f8-3850-2377306289f3",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|e33a25a9-ddeb-d0f8-3850-2377306289f3",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715771375769
		},
		"e-238": {
			"id": "e-238",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-56",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-237"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|e33a25a9-ddeb-d0f8-3850-2377306289f3",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|e33a25a9-ddeb-d0f8-3850-2377306289f3",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715771375773
		},
		"e-239": {
			"id": "e-239",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-57",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-240"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|e33a25a9-ddeb-d0f8-3850-2377306289f3",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|e33a25a9-ddeb-d0f8-3850-2377306289f3",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715771736759
		},
		"e-240": {
			"id": "e-240",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-54",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-239"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|e33a25a9-ddeb-d0f8-3850-2377306289f3",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|e33a25a9-ddeb-d0f8-3850-2377306289f3",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715771736762
		},
		"e-241": {
			"id": "e-241",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-59",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-242"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|62de9a36-abc0-3691-d151-3d8306b657fb",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|62de9a36-abc0-3691-d151-3d8306b657fb",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715782437243
		},
		"e-242": {
			"id": "e-242",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-60",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-241"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|62de9a36-abc0-3691-d151-3d8306b657fb",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|62de9a36-abc0-3691-d151-3d8306b657fb",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715782437245
		},
		"e-243": {
			"id": "e-243",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-61",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-244"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|69130836-6dc7-605e-90d2-b0b6a9a55002",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|69130836-6dc7-605e-90d2-b0b6a9a55002",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715851142956
		},
		"e-244": {
			"id": "e-244",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-62",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-243"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|69130836-6dc7-605e-90d2-b0b6a9a55002",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|69130836-6dc7-605e-90d2-b0b6a9a55002",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715851142959
		},
		"e-245": {
			"id": "e-245",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-63",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-246"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|49b2518b-7445-e3ac-09cd-a2abeec3f71d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|49b2518b-7445-e3ac-09cd-a2abeec3f71d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715854577760
		},
		"e-246": {
			"id": "e-246",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-64",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-245"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|49b2518b-7445-e3ac-09cd-a2abeec3f71d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|49b2518b-7445-e3ac-09cd-a2abeec3f71d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715854577764
		},
		"e-247": {
			"id": "e-247",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-65",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-248"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|49b2518b-7445-e3ac-09cd-a2abeec3f71d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|49b2518b-7445-e3ac-09cd-a2abeec3f71d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715861173431
		},
		"e-248": {
			"id": "e-248",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-66",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-247"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|49b2518b-7445-e3ac-09cd-a2abeec3f71d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|49b2518b-7445-e3ac-09cd-a2abeec3f71d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715861173439
		},
		"e-257": {
			"id": "e-257",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-55",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-258"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ed31",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ed31",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715864971005
		},
		"e-258": {
			"id": "e-258",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-56",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-257"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ed31",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ed31",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715864971005
		},
		"e-259": {
			"id": "e-259",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-57",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-260"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ed31",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ed31",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715864971005
		},
		"e-260": {
			"id": "e-260",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-54",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-259"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ed31",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ed31",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715864971005
		},
		"e-277": {
			"id": "e-277",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-28",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-278"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|c4a212dd-1577-7ec1-4d20-ed9fc77c6e34",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|c4a212dd-1577-7ec1-4d20-ed9fc77c6e34",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715866047261
		},
		"e-278": {
			"id": "e-278",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-29",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-277"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|c4a212dd-1577-7ec1-4d20-ed9fc77c6e34",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|c4a212dd-1577-7ec1-4d20-ed9fc77c6e34",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715866047261
		},
		"e-279": {
			"id": "e-279",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-31",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-280"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|c4a212dd-1577-7ec1-4d20-ed9fc77c6e34",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|c4a212dd-1577-7ec1-4d20-ed9fc77c6e34",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715866047261
		},
		"e-280": {
			"id": "e-280",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-32",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-279"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|c4a212dd-1577-7ec1-4d20-ed9fc77c6e34",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|c4a212dd-1577-7ec1-4d20-ed9fc77c6e34",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715866047261
		},
		"e-281": {
			"id": "e-281",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-30",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-282"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|c4a212dd-1577-7ec1-4d20-ed9fc77c6e34",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|c4a212dd-1577-7ec1-4d20-ed9fc77c6e34",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715866047261
		},
		"e-303": {
			"id": "e-303",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-304"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|8f1d6203-c062-5482-7db7-186e57cf819b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|8f1d6203-c062-5482-7db7-186e57cf819b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715869433294
		},
		"e-304": {
			"id": "e-304",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-303"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|8f1d6203-c062-5482-7db7-186e57cf819b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|8f1d6203-c062-5482-7db7-186e57cf819b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715869433294
		},
		"e-305": {
			"id": "e-305",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-25",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-306"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|8f1d6203-c062-5482-7db7-186e57cf81a7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|8f1d6203-c062-5482-7db7-186e57cf81a7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715869433294
		},
		"e-307": {
			"id": "e-307",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-308"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|8f1d6203-c062-5482-7db7-186e57cf81d7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|8f1d6203-c062-5482-7db7-186e57cf81d7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715869433294
		},
		"e-308": {
			"id": "e-308",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-307"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|8f1d6203-c062-5482-7db7-186e57cf81d7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|8f1d6203-c062-5482-7db7-186e57cf81d7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715869433294
		},
		"e-309": {
			"id": "e-309",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-310"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|8f1d6203-c062-5482-7db7-186e57cf81f7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|8f1d6203-c062-5482-7db7-186e57cf81f7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715869433294
		},
		"e-310": {
			"id": "e-310",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-309"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|8f1d6203-c062-5482-7db7-186e57cf81f7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|8f1d6203-c062-5482-7db7-186e57cf81f7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715869433294
		},
		"e-311": {
			"id": "e-311",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-312"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|8f1d6203-c062-5482-7db7-186e57cf820b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|8f1d6203-c062-5482-7db7-186e57cf820b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715869433294
		},
		"e-312": {
			"id": "e-312",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-311"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|8f1d6203-c062-5482-7db7-186e57cf820b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|8f1d6203-c062-5482-7db7-186e57cf820b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715869433294
		},
		"e-313": {
			"id": "e-313",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-26",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-314"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|8f1d6203-c062-5482-7db7-186e57cf8235",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|8f1d6203-c062-5482-7db7-186e57cf8235",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715869433294
		},
		"e-315": {
			"id": "e-315",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-23",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-316"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|8f1d6203-c062-5482-7db7-186e57cf8240",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|8f1d6203-c062-5482-7db7-186e57cf8240",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715869433294
		},
		"e-317": {
			"id": "e-317",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-67",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-318"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|e23b86c4-463d-db89-568a-37e5977cf6a5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|e23b86c4-463d-db89-568a-37e5977cf6a5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715889363328
		},
		"e-318": {
			"id": "e-318",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-68",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-317"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|e23b86c4-463d-db89-568a-37e5977cf6a5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|e23b86c4-463d-db89-568a-37e5977cf6a5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715889363331
		},
		"e-319": {
			"id": "e-319",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-69",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-320"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|e23b86c4-463d-db89-568a-37e5977cf6a5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|e23b86c4-463d-db89-568a-37e5977cf6a5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715892706565
		},
		"e-320": {
			"id": "e-320",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-70",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-319"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|e23b86c4-463d-db89-568a-37e5977cf6a5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|e23b86c4-463d-db89-568a-37e5977cf6a5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715892706568
		},
		"e-321": {
			"id": "e-321",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-71",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-322"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|e23b86c4-463d-db89-568a-37e5977cf6a5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|e23b86c4-463d-db89-568a-37e5977cf6a5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715893268463
		},
		"e-322": {
			"id": "e-322",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-72",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-321"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|e23b86c4-463d-db89-568a-37e5977cf6a5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|e23b86c4-463d-db89-568a-37e5977cf6a5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715893268470
		},
		"e-333": {
			"id": "e-333",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-75",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-334"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|8a9a20fd-ebf0-177d-c8d8-9400fe26a54f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|8a9a20fd-ebf0-177d-c8d8-9400fe26a54f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715935934920
		},
		"e-334": {
			"id": "e-334",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-76",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-333"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|8a9a20fd-ebf0-177d-c8d8-9400fe26a54f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|8a9a20fd-ebf0-177d-c8d8-9400fe26a54f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715935934920
		},
		"e-335": {
			"id": "e-335",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-73",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-336"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|8a9a20fd-ebf0-177d-c8d8-9400fe26a54f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|8a9a20fd-ebf0-177d-c8d8-9400fe26a54f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715935934920
		},
		"e-336": {
			"id": "e-336",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-74",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-335"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|8a9a20fd-ebf0-177d-c8d8-9400fe26a54f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|8a9a20fd-ebf0-177d-c8d8-9400fe26a54f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715935934920
		},
		"e-337": {
			"id": "e-337",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-77",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-338"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|8a9a20fd-ebf0-177d-c8d8-9400fe26a55d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|8a9a20fd-ebf0-177d-c8d8-9400fe26a55d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715935934920
		},
		"e-339": {
			"id": "e-339",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-78",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-340"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|8a9a20fd-ebf0-177d-c8d8-9400fe26a55d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|8a9a20fd-ebf0-177d-c8d8-9400fe26a55d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715935934920
		},
		"e-341": {
			"id": "e-341",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-79",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-342"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|3e354dde-1efd-55af-3f60-d193e33fa76b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|3e354dde-1efd-55af-3f60-d193e33fa76b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715936150437
		},
		"e-342": {
			"id": "e-342",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-80",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-341"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|3e354dde-1efd-55af-3f60-d193e33fa76b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|3e354dde-1efd-55af-3f60-d193e33fa76b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715936150440
		},
		"e-343": {
			"id": "e-343",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-81",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-344"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|62de9a36-abc0-3691-d151-3d8306b657fb",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|62de9a36-abc0-3691-d151-3d8306b657fb",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715941319685
		},
		"e-344": {
			"id": "e-344",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-82",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-343"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|62de9a36-abc0-3691-d151-3d8306b657fb",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|62de9a36-abc0-3691-d151-3d8306b657fb",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715941319688
		},
		"e-345": {
			"id": "e-345",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-83",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-346"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|69130836-6dc7-605e-90d2-b0b6a9a55002",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|69130836-6dc7-605e-90d2-b0b6a9a55002",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715941515445
		},
		"e-346": {
			"id": "e-346",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-84",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-345"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|69130836-6dc7-605e-90d2-b0b6a9a55002",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|69130836-6dc7-605e-90d2-b0b6a9a55002",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715941515453
		},
		"e-347": {
			"id": "e-347",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-85",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-348"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ec99",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ec99",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715941935180
		},
		"e-348": {
			"id": "e-348",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-86",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-347"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ec99",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ec99",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715941935182
		},
		"e-349": {
			"id": "e-349",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-87",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-350"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ec99",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ec99",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715942178900
		},
		"e-350": {
			"id": "e-350",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-88",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-349"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ec99",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ec99",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715942178903
		},
		"e-351": {
			"id": "e-351",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-89",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-352"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ecb5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ecb5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715942337776
		},
		"e-352": {
			"id": "e-352",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-90",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-351"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ecb5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ecb5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715942337779
		},
		"e-353": {
			"id": "e-353",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-91",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-354"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ecb5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ecb5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715942801266
		},
		"e-354": {
			"id": "e-354",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-92",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-353"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ecb5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ecb5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715942801270
		},
		"e-355": {
			"id": "e-355",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-93",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-356"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|f5242c8d-33db-7ca3-77a4-2281f4e932e2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|f5242c8d-33db-7ca3-77a4-2281f4e932e2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715944145458
		},
		"e-356": {
			"id": "e-356",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-94",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-355"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|f5242c8d-33db-7ca3-77a4-2281f4e932e2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|f5242c8d-33db-7ca3-77a4-2281f4e932e2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715944145461
		},
		"e-357": {
			"id": "e-357",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-95",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-358"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|f5242c8d-33db-7ca3-77a4-2281f4e932e2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|f5242c8d-33db-7ca3-77a4-2281f4e932e2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715944548980
		},
		"e-358": {
			"id": "e-358",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-96",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-357"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|f5242c8d-33db-7ca3-77a4-2281f4e932e2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|f5242c8d-33db-7ca3-77a4-2281f4e932e2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715944548983
		},
		"e-359": {
			"id": "e-359",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-97",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-360"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ed5e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ed5e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715944710686
		},
		"e-360": {
			"id": "e-360",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-98",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-359"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ed5e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ed5e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715944710691
		},
		"e-361": {
			"id": "e-361",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-99",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-362"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ed5e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ed5e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715944852290
		},
		"e-362": {
			"id": "e-362",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-100",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-361"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ed5e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|f7c9205d-cceb-217e-8ec4-2a72a0f6ed5e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715944852292
		},
		"e-363": {
			"id": "e-363",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-26",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-364"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|db6e6bc3-0091-db47-4155-0d8540187e8b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|db6e6bc3-0091-db47-4155-0d8540187e8b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715945369389
		},
		"e-365": {
			"id": "e-365",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-26",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-366"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|db6e6bc3-0091-db47-4155-0d8540187e8d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|db6e6bc3-0091-db47-4155-0d8540187e8d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715945369389
		},
		"e-367": {
			"id": "e-367",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-42",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-368"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|27ce416b-7f84-e4af-e092-e8ee59abd2a1",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|27ce416b-7f84-e4af-e092-e8ee59abd2a1",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1715960753609
		},
		"e-369": {
			"id": "e-369",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-101",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-370"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|313c9877-13af-ac3a-9d4b-2396ea6b177d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|313c9877-13af-ac3a-9d4b-2396ea6b177d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716199490058
		},
		"e-370": {
			"id": "e-370",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-104",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-369"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|313c9877-13af-ac3a-9d4b-2396ea6b177d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|313c9877-13af-ac3a-9d4b-2396ea6b177d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716199490061
		},
		"e-371": {
			"id": "e-371",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-102",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-372"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|313c9877-13af-ac3a-9d4b-2396ea6b177d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|313c9877-13af-ac3a-9d4b-2396ea6b177d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716199595008
		},
		"e-372": {
			"id": "e-372",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-103",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-371"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|313c9877-13af-ac3a-9d4b-2396ea6b177d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|313c9877-13af-ac3a-9d4b-2396ea6b177d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716199595058
		},
		"e-373": {
			"id": "e-373",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-105",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-374"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|2585aa23-bd5b-dfa5-dc23-601bd4d038e7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|2585aa23-bd5b-dfa5-dc23-601bd4d038e7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716200773932
		},
		"e-374": {
			"id": "e-374",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-106",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-373"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|2585aa23-bd5b-dfa5-dc23-601bd4d038e7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|2585aa23-bd5b-dfa5-dc23-601bd4d038e7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716200773935
		},
		"e-375": {
			"id": "e-375",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-107",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-376"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|2585aa23-bd5b-dfa5-dc23-601bd4d038e7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|2585aa23-bd5b-dfa5-dc23-601bd4d038e7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716201028442
		},
		"e-376": {
			"id": "e-376",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-108",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-375"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664380d11f050d5089c3d4b9|2585aa23-bd5b-dfa5-dc23-601bd4d038e7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664380d11f050d5089c3d4b9|2585aa23-bd5b-dfa5-dc23-601bd4d038e7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716201028447
		},
		"e-377": {
			"id": "e-377",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-39",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-378"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|0cc0a953-9bd6-7a37-c51b-e4d7a675501a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|0cc0a953-9bd6-7a37-c51b-e4d7a675501a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716204770330
		},
		"e-378": {
			"id": "e-378",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-40",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-377"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|0cc0a953-9bd6-7a37-c51b-e4d7a675501a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|0cc0a953-9bd6-7a37-c51b-e4d7a675501a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716204770330
		},
		"e-379": {
			"id": "e-379",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-37",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-380"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|0cc0a953-9bd6-7a37-c51b-e4d7a675501a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|0cc0a953-9bd6-7a37-c51b-e4d7a675501a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716204770330
		},
		"e-380": {
			"id": "e-380",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-379"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|0cc0a953-9bd6-7a37-c51b-e4d7a675501a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|0cc0a953-9bd6-7a37-c51b-e4d7a675501a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716204770330
		},
		"e-381": {
			"id": "e-381",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-26",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-382"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|0cc0a953-9bd6-7a37-c51b-e4d7a6755054",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|0cc0a953-9bd6-7a37-c51b-e4d7a6755054",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716204770330
		},
		"e-383": {
			"id": "e-383",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-35",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-384"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|0cc0a953-9bd6-7a37-c51b-e4d7a6755065",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|0cc0a953-9bd6-7a37-c51b-e4d7a6755065",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716204770330
		},
		"e-384": {
			"id": "e-384",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-36",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-383"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|0cc0a953-9bd6-7a37-c51b-e4d7a6755065",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|0cc0a953-9bd6-7a37-c51b-e4d7a6755065",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716204770330
		},
		"e-385": {
			"id": "e-385",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-33",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-386"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|0cc0a953-9bd6-7a37-c51b-e4d7a6755065",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|0cc0a953-9bd6-7a37-c51b-e4d7a6755065",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716204770330
		},
		"e-386": {
			"id": "e-386",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-34",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-385"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|0cc0a953-9bd6-7a37-c51b-e4d7a6755065",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|0cc0a953-9bd6-7a37-c51b-e4d7a6755065",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716204770330
		},
		"e-387": {
			"id": "e-387",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-109",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-388"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|c5df545f-ba2f-0bda-7964-4f898813cabe",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|c5df545f-ba2f-0bda-7964-4f898813cabe",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716225972487
		},
		"e-388": {
			"id": "e-388",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_OUT_OF_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-110",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-387"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "661e83da8fbaf4fb3ed491cb|c5df545f-ba2f-0bda-7964-4f898813cabe",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "661e83da8fbaf4fb3ed491cb|c5df545f-ba2f-0bda-7964-4f898813cabe",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 100,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716225972493
		},
		"e-389": {
			"id": "e-389",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-111",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-390"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|09476896-019b-4a25-5d1c-3e9c4d54ae79",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|09476896-019b-4a25-5d1c-3e9c4d54ae79",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716387043922
		},
		"e-390": {
			"id": "e-390",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLL_OUT_OF_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-112",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-389"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|09476896-019b-4a25-5d1c-3e9c4d54ae79",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|09476896-019b-4a25-5d1c-3e9c4d54ae79",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716387043925
		},
		"e-391": {
			"id": "e-391",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-109",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-392"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|f93c4c46-99b1-1f41-8b37-d0834d24d673",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|f93c4c46-99b1-1f41-8b37-d0834d24d673",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716394211549
		},
		"e-392": {
			"id": "e-392",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_OUT_OF_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-110",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-391"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|f93c4c46-99b1-1f41-8b37-d0834d24d673",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|f93c4c46-99b1-1f41-8b37-d0834d24d673",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 100,
				"scrollOffsetUnit": "%",
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716394211549
		},
		"e-393": {
			"id": "e-393",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-28",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-394"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|f93c4c46-99b1-1f41-8b37-d0834d24d67c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|f93c4c46-99b1-1f41-8b37-d0834d24d67c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716394211549
		},
		"e-394": {
			"id": "e-394",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-29",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-393"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|f93c4c46-99b1-1f41-8b37-d0834d24d67c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|f93c4c46-99b1-1f41-8b37-d0834d24d67c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716394211549
		},
		"e-395": {
			"id": "e-395",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-31",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-396"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|f93c4c46-99b1-1f41-8b37-d0834d24d67c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|f93c4c46-99b1-1f41-8b37-d0834d24d67c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716394211549
		},
		"e-396": {
			"id": "e-396",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-32",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-395"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|f93c4c46-99b1-1f41-8b37-d0834d24d67c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|f93c4c46-99b1-1f41-8b37-d0834d24d67c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716394211549
		},
		"e-397": {
			"id": "e-397",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-30",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-398"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|f93c4c46-99b1-1f41-8b37-d0834d24d67c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|f93c4c46-99b1-1f41-8b37-d0834d24d67c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716394211549
		},
		"e-399": {
			"id": "e-399",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-17",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-400"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|f93c4c46-99b1-1f41-8b37-d0834d24d6ec",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|f93c4c46-99b1-1f41-8b37-d0834d24d6ec",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716394211549
		},
		"e-401": {
			"id": "e-401",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-26",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-402"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|4c268a20-13d9-e2a7-f05a-44a12fb88ae1",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|4c268a20-13d9-e2a7-f05a-44a12fb88ae1",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716394456425
		},
		"e-403": {
			"id": "e-403",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-26",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-404"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|4c268a20-13d9-e2a7-f05a-44a12fb88ae3",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|4c268a20-13d9-e2a7-f05a-44a12fb88ae3",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716394456425
		},
		"e-405": {
			"id": "e-405",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-102",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-406"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|3f3f1ab2-4029-f8d5-7c4a-87a7343a4e01",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|3f3f1ab2-4029-f8d5-7c4a-87a7343a4e01",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716394512132
		},
		"e-406": {
			"id": "e-406",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-103",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-405"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|3f3f1ab2-4029-f8d5-7c4a-87a7343a4e01",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|3f3f1ab2-4029-f8d5-7c4a-87a7343a4e01",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716394512132
		},
		"e-407": {
			"id": "e-407",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-101",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-408"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|3f3f1ab2-4029-f8d5-7c4a-87a7343a4e01",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|3f3f1ab2-4029-f8d5-7c4a-87a7343a4e01",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716394512132
		},
		"e-408": {
			"id": "e-408",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-104",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-407"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|3f3f1ab2-4029-f8d5-7c4a-87a7343a4e01",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|3f3f1ab2-4029-f8d5-7c4a-87a7343a4e01",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716394512132
		},
		"e-409": {
			"id": "e-409",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-107",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-410"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|2ecd7e26-0b15-fe4b-2426-bcb33c11b877",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|2ecd7e26-0b15-fe4b-2426-bcb33c11b877",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716394630824
		},
		"e-410": {
			"id": "e-410",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-108",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-409"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|2ecd7e26-0b15-fe4b-2426-bcb33c11b877",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|2ecd7e26-0b15-fe4b-2426-bcb33c11b877",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716394630824
		},
		"e-411": {
			"id": "e-411",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-105",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-412"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|2ecd7e26-0b15-fe4b-2426-bcb33c11b877",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|2ecd7e26-0b15-fe4b-2426-bcb33c11b877",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716394630824
		},
		"e-412": {
			"id": "e-412",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-106",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-411"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|2ecd7e26-0b15-fe4b-2426-bcb33c11b877",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|2ecd7e26-0b15-fe4b-2426-bcb33c11b877",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716394630824
		},
		"e-413": {
			"id": "e-413",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-33",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-414"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|ec6d891c-d5cc-48be-822e-ed0d1565f98a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|ec6d891c-d5cc-48be-822e-ed0d1565f98a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716560165603
		},
		"e-414": {
			"id": "e-414",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-34",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-413"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|ec6d891c-d5cc-48be-822e-ed0d1565f98a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|ec6d891c-d5cc-48be-822e-ed0d1565f98a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716560165603
		},
		"e-415": {
			"id": "e-415",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-35",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-416"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|ec6d891c-d5cc-48be-822e-ed0d1565f98a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|ec6d891c-d5cc-48be-822e-ed0d1565f98a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716560165603
		},
		"e-416": {
			"id": "e-416",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-36",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-415"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "664b33ceb3ad22f0573f4016|ec6d891c-d5cc-48be-822e-ed0d1565f98a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "664b33ceb3ad22f0573f4016|ec6d891c-d5cc-48be-822e-ed0d1565f98a",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716560165603
		},
		"e-417": {
			"id": "e-417",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-39",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-418"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|6def1c94-e4d9-f36e-ec4b-92e5c3b94af2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|6def1c94-e4d9-f36e-ec4b-92e5c3b94af2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-418": {
			"id": "e-418",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-40",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-417"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|6def1c94-e4d9-f36e-ec4b-92e5c3b94af2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|6def1c94-e4d9-f36e-ec4b-92e5c3b94af2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-419": {
			"id": "e-419",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-37",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-420"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|6def1c94-e4d9-f36e-ec4b-92e5c3b94af2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|6def1c94-e4d9-f36e-ec4b-92e5c3b94af2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-420": {
			"id": "e-420",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-38",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-419"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|6def1c94-e4d9-f36e-ec4b-92e5c3b94af2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|6def1c94-e4d9-f36e-ec4b-92e5c3b94af2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-421": {
			"id": "e-421",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-26",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-422"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|6def1c94-e4d9-f36e-ec4b-92e5c3b94b2c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|6def1c94-e4d9-f36e-ec4b-92e5c3b94b2c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-423": {
			"id": "e-423",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-35",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-424"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|6def1c94-e4d9-f36e-ec4b-92e5c3b94b3d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|6def1c94-e4d9-f36e-ec4b-92e5c3b94b3d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-424": {
			"id": "e-424",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-36",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-423"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|6def1c94-e4d9-f36e-ec4b-92e5c3b94b3d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|6def1c94-e4d9-f36e-ec4b-92e5c3b94b3d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-425": {
			"id": "e-425",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OVER",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-33",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-426"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|6def1c94-e4d9-f36e-ec4b-92e5c3b94b3d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|6def1c94-e4d9-f36e-ec4b-92e5c3b94b3d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-426": {
			"id": "e-426",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_OUT",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-34",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-425"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|6def1c94-e4d9-f36e-ec4b-92e5c3b94b3d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|6def1c94-e4d9-f36e-ec4b-92e5c3b94b3d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-427": {
			"id": "e-427",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-42",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-428"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|75d2b87c-f770-13fa-dd1d-d349fc5bbcc2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|75d2b87c-f770-13fa-dd1d-d349fc5bbcc2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-429": {
			"id": "e-429",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-43",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-430"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|106e0ab5-2fa6-7d4e-be8c-95a1be9fe1ce",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|106e0ab5-2fa6-7d4e-be8c-95a1be9fe1ce",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-431": {
			"id": "e-431",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-51",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-432"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|573ebc0c-c752-1a96-7dcf-9d2d875a0931",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|573ebc0c-c752-1a96-7dcf-9d2d875a0931",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-432": {
			"id": "e-432",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-52",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-431"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|573ebc0c-c752-1a96-7dcf-9d2d875a0931",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|573ebc0c-c752-1a96-7dcf-9d2d875a0931",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-433": {
			"id": "e-433",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-53",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-434"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|573ebc0c-c752-1a96-7dcf-9d2d875a0931",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|573ebc0c-c752-1a96-7dcf-9d2d875a0931",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-434": {
			"id": "e-434",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-58",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-433"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|573ebc0c-c752-1a96-7dcf-9d2d875a0931",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|573ebc0c-c752-1a96-7dcf-9d2d875a0931",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-435": {
			"id": "e-435",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-55",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-436"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|e33a25a9-ddeb-d0f8-3850-2377306289f3",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|e33a25a9-ddeb-d0f8-3850-2377306289f3",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-436": {
			"id": "e-436",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-56",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-435"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|e33a25a9-ddeb-d0f8-3850-2377306289f3",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|e33a25a9-ddeb-d0f8-3850-2377306289f3",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-437": {
			"id": "e-437",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-57",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-438"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|e33a25a9-ddeb-d0f8-3850-2377306289f3",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|e33a25a9-ddeb-d0f8-3850-2377306289f3",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-438": {
			"id": "e-438",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-54",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-437"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|e33a25a9-ddeb-d0f8-3850-2377306289f3",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|e33a25a9-ddeb-d0f8-3850-2377306289f3",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-439": {
			"id": "e-439",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-59",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-440"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|62de9a36-abc0-3691-d151-3d8306b657fb",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|62de9a36-abc0-3691-d151-3d8306b657fb",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-440": {
			"id": "e-440",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-60",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-439"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|62de9a36-abc0-3691-d151-3d8306b657fb",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|62de9a36-abc0-3691-d151-3d8306b657fb",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-441": {
			"id": "e-441",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-61",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-442"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|69130836-6dc7-605e-90d2-b0b6a9a55002",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|69130836-6dc7-605e-90d2-b0b6a9a55002",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-442": {
			"id": "e-442",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-62",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-441"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|69130836-6dc7-605e-90d2-b0b6a9a55002",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|69130836-6dc7-605e-90d2-b0b6a9a55002",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-443": {
			"id": "e-443",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-63",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-444"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|49b2518b-7445-e3ac-09cd-a2abeec3f71d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|49b2518b-7445-e3ac-09cd-a2abeec3f71d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-444": {
			"id": "e-444",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-64",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-443"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|49b2518b-7445-e3ac-09cd-a2abeec3f71d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|49b2518b-7445-e3ac-09cd-a2abeec3f71d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-445": {
			"id": "e-445",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-65",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-446"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|49b2518b-7445-e3ac-09cd-a2abeec3f71d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|49b2518b-7445-e3ac-09cd-a2abeec3f71d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-446": {
			"id": "e-446",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-66",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-445"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|49b2518b-7445-e3ac-09cd-a2abeec3f71d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|49b2518b-7445-e3ac-09cd-a2abeec3f71d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-447": {
			"id": "e-447",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-55",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-448"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ed31",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ed31",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-448": {
			"id": "e-448",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-56",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-447"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ed31",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ed31",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-449": {
			"id": "e-449",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-57",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-450"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ed31",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ed31",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-450": {
			"id": "e-450",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-54",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-449"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ed31",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ed31",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-459": {
			"id": "e-459",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-460"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|8f1d6203-c062-5482-7db7-186e57cf819b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|8f1d6203-c062-5482-7db7-186e57cf819b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-460": {
			"id": "e-460",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-459"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|8f1d6203-c062-5482-7db7-186e57cf819b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|8f1d6203-c062-5482-7db7-186e57cf819b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-461": {
			"id": "e-461",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-25",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-462"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|8f1d6203-c062-5482-7db7-186e57cf81a7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|8f1d6203-c062-5482-7db7-186e57cf81a7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-463": {
			"id": "e-463",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-464"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|8f1d6203-c062-5482-7db7-186e57cf81d7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|8f1d6203-c062-5482-7db7-186e57cf81d7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-464": {
			"id": "e-464",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-463"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|8f1d6203-c062-5482-7db7-186e57cf81d7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|8f1d6203-c062-5482-7db7-186e57cf81d7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-465": {
			"id": "e-465",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-466"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|8f1d6203-c062-5482-7db7-186e57cf81f7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|8f1d6203-c062-5482-7db7-186e57cf81f7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-466": {
			"id": "e-466",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-465"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|8f1d6203-c062-5482-7db7-186e57cf81f7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|8f1d6203-c062-5482-7db7-186e57cf81f7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-467": {
			"id": "e-467",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_OPEN",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-20",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-468"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|8f1d6203-c062-5482-7db7-186e57cf820b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|8f1d6203-c062-5482-7db7-186e57cf820b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-468": {
			"id": "e-468",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "DROPDOWN_CLOSE",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-21",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-467"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|8f1d6203-c062-5482-7db7-186e57cf820b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|8f1d6203-c062-5482-7db7-186e57cf820b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-469": {
			"id": "e-469",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-26",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-470"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|8f1d6203-c062-5482-7db7-186e57cf8235",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|8f1d6203-c062-5482-7db7-186e57cf8235",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-471": {
			"id": "e-471",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-23",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-472"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|8f1d6203-c062-5482-7db7-186e57cf8240",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|8f1d6203-c062-5482-7db7-186e57cf8240",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": true,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-473": {
			"id": "e-473",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-67",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-474"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|e23b86c4-463d-db89-568a-37e5977cf6a5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|e23b86c4-463d-db89-568a-37e5977cf6a5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-474": {
			"id": "e-474",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-68",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-473"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|e23b86c4-463d-db89-568a-37e5977cf6a5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|e23b86c4-463d-db89-568a-37e5977cf6a5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-475": {
			"id": "e-475",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-69",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-476"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|e23b86c4-463d-db89-568a-37e5977cf6a5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|e23b86c4-463d-db89-568a-37e5977cf6a5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-476": {
			"id": "e-476",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-70",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-475"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|e23b86c4-463d-db89-568a-37e5977cf6a5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|e23b86c4-463d-db89-568a-37e5977cf6a5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-477": {
			"id": "e-477",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-71",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-478"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|e23b86c4-463d-db89-568a-37e5977cf6a5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|e23b86c4-463d-db89-568a-37e5977cf6a5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-478": {
			"id": "e-478",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-72",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-477"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|e23b86c4-463d-db89-568a-37e5977cf6a5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|e23b86c4-463d-db89-568a-37e5977cf6a5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-479": {
			"id": "e-479",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-75",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-480"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|8a9a20fd-ebf0-177d-c8d8-9400fe26a54f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|8a9a20fd-ebf0-177d-c8d8-9400fe26a54f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-480": {
			"id": "e-480",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-76",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-479"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|8a9a20fd-ebf0-177d-c8d8-9400fe26a54f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|8a9a20fd-ebf0-177d-c8d8-9400fe26a54f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-481": {
			"id": "e-481",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-73",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-482"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|8a9a20fd-ebf0-177d-c8d8-9400fe26a54f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|8a9a20fd-ebf0-177d-c8d8-9400fe26a54f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-482": {
			"id": "e-482",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-74",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-481"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|8a9a20fd-ebf0-177d-c8d8-9400fe26a54f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|8a9a20fd-ebf0-177d-c8d8-9400fe26a54f",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-483": {
			"id": "e-483",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-77",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-484"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|8a9a20fd-ebf0-177d-c8d8-9400fe26a55d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|8a9a20fd-ebf0-177d-c8d8-9400fe26a55d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-485": {
			"id": "e-485",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-78",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-486"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|8a9a20fd-ebf0-177d-c8d8-9400fe26a55d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|8a9a20fd-ebf0-177d-c8d8-9400fe26a55d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-487": {
			"id": "e-487",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-79",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-488"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|3e354dde-1efd-55af-3f60-d193e33fa76b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|3e354dde-1efd-55af-3f60-d193e33fa76b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-488": {
			"id": "e-488",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-80",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-487"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|3e354dde-1efd-55af-3f60-d193e33fa76b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|3e354dde-1efd-55af-3f60-d193e33fa76b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-489": {
			"id": "e-489",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-81",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-490"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|62de9a36-abc0-3691-d151-3d8306b657fb",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|62de9a36-abc0-3691-d151-3d8306b657fb",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-490": {
			"id": "e-490",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-82",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-489"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|62de9a36-abc0-3691-d151-3d8306b657fb",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|62de9a36-abc0-3691-d151-3d8306b657fb",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-491": {
			"id": "e-491",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-83",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-492"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|69130836-6dc7-605e-90d2-b0b6a9a55002",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|69130836-6dc7-605e-90d2-b0b6a9a55002",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-492": {
			"id": "e-492",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-84",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-491"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|69130836-6dc7-605e-90d2-b0b6a9a55002",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|69130836-6dc7-605e-90d2-b0b6a9a55002",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-493": {
			"id": "e-493",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-85",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-494"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ec99",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ec99",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-494": {
			"id": "e-494",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-86",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-493"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ec99",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ec99",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-495": {
			"id": "e-495",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-87",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-496"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ec99",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ec99",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-496": {
			"id": "e-496",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-88",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-495"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ec99",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ec99",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-497": {
			"id": "e-497",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-89",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-498"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ecb5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ecb5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-498": {
			"id": "e-498",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-90",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-497"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ecb5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ecb5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-499": {
			"id": "e-499",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-91",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-500"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ecb5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ecb5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-500": {
			"id": "e-500",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-92",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-499"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ecb5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ecb5",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-501": {
			"id": "e-501",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-93",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-502"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|f5242c8d-33db-7ca3-77a4-2281f4e932e2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|f5242c8d-33db-7ca3-77a4-2281f4e932e2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-502": {
			"id": "e-502",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-94",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-501"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|f5242c8d-33db-7ca3-77a4-2281f4e932e2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|f5242c8d-33db-7ca3-77a4-2281f4e932e2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-503": {
			"id": "e-503",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-95",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-504"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|f5242c8d-33db-7ca3-77a4-2281f4e932e2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|f5242c8d-33db-7ca3-77a4-2281f4e932e2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-504": {
			"id": "e-504",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-96",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-503"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|f5242c8d-33db-7ca3-77a4-2281f4e932e2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|f5242c8d-33db-7ca3-77a4-2281f4e932e2",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-505": {
			"id": "e-505",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-97",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-506"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ed5e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ed5e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-506": {
			"id": "e-506",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-98",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-505"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ed5e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ed5e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-507": {
			"id": "e-507",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-99",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-508"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ed5e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ed5e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-508": {
			"id": "e-508",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-100",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-507"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ed5e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|f7c9205d-cceb-217e-8ec4-2a72a0f6ed5e",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-509": {
			"id": "e-509",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-26",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-510"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|db6e6bc3-0091-db47-4155-0d8540187e8b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|db6e6bc3-0091-db47-4155-0d8540187e8b",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-511": {
			"id": "e-511",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-26",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-512"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|db6e6bc3-0091-db47-4155-0d8540187e8d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|db6e6bc3-0091-db47-4155-0d8540187e8d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-513": {
			"id": "e-513",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-42",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-514"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|27ce416b-7f84-e4af-e092-e8ee59abd2a1",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|27ce416b-7f84-e4af-e092-e8ee59abd2a1",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-515": {
			"id": "e-515",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-101",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-516"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|313c9877-13af-ac3a-9d4b-2396ea6b177d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|313c9877-13af-ac3a-9d4b-2396ea6b177d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-516": {
			"id": "e-516",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-104",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-515"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|313c9877-13af-ac3a-9d4b-2396ea6b177d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|313c9877-13af-ac3a-9d4b-2396ea6b177d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-517": {
			"id": "e-517",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-102",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-518"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|313c9877-13af-ac3a-9d4b-2396ea6b177d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|313c9877-13af-ac3a-9d4b-2396ea6b177d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-518": {
			"id": "e-518",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-103",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-517"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|313c9877-13af-ac3a-9d4b-2396ea6b177d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|313c9877-13af-ac3a-9d4b-2396ea6b177d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-519": {
			"id": "e-519",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-105",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-520"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|2585aa23-bd5b-dfa5-dc23-601bd4d038e7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|2585aa23-bd5b-dfa5-dc23-601bd4d038e7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-520": {
			"id": "e-520",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-106",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-519"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|2585aa23-bd5b-dfa5-dc23-601bd4d038e7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|2585aa23-bd5b-dfa5-dc23-601bd4d038e7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-521": {
			"id": "e-521",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-107",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-522"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|2585aa23-bd5b-dfa5-dc23-601bd4d038e7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|2585aa23-bd5b-dfa5-dc23-601bd4d038e7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-522": {
			"id": "e-522",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-108",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-521"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "66562123907a14ef6e2f9252|2585aa23-bd5b-dfa5-dc23-601bd4d038e7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "66562123907a14ef6e2f9252|2585aa23-bd5b-dfa5-dc23-601bd4d038e7",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1716920543442
		},
		"e-523": {
			"id": "e-523",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-114",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-524"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "661e83da8fbaf4fb3ed491cb|b76af6a8-d2df-ab1c-4faa-079f49d91397"
			},
			"targets": [],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1717061208155
		}
	},
	"actionLists": {
		"a-7": {
			"id": "a-7",
			"title": "modalka ebuchay",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-7-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".pop_up_desktop_menu",
							"selectorGuids": ["a9c9757f-3ec6-670a-a3b3-056bc75c42d2"]
						},
						"value": "none"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-7-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".pop_up_desktop_menu",
							"selectorGuids": ["a9c9757f-3ec6-670a-a3b3-056bc75c42d2"]
						},
						"value": "flex"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1713694466532
		},
		"a-8": {
			"id": "a-8",
			"title": "clouse pop up",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-8-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".pop_up_desktop_menu",
							"selectorGuids": ["a9c9757f-3ec6-670a-a3b3-056bc75c42d2"]
						},
						"value": "block"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-8-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".pop_up_desktop_menu",
							"selectorGuids": ["a9c9757f-3ec6-670a-a3b3-056bc75c42d2"]
						},
						"value": "none"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1713694887754
		},
		"a-9": {
			"id": "a-9",
			"title": "menu_personal_collection",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-9-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".pop_up_desktop_menu_personal",
							"selectorGuids": ["7a03ad94-a3c0-82e9-eca6-37a30e3b2e91"]
						},
						"value": "none"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-9-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".pop_up_desktop_menu_personal",
							"selectorGuids": ["7a03ad94-a3c0-82e9-eca6-37a30e3b2e91"]
						},
						"value": "flex"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1713696727425
		},
		"a-10": {
			"id": "a-10",
			"title": "peronal_clouse",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-10-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".pop_up_desktop_menu_personal",
							"selectorGuids": ["7a03ad94-a3c0-82e9-eca6-37a30e3b2e91"]
						},
						"value": "flex"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-10-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".pop_up_desktop_menu_personal",
							"selectorGuids": ["7a03ad94-a3c0-82e9-eca6-37a30e3b2e91"]
						},
						"value": "none"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1713696957739
		},
		"a-11": {
			"id": "a-11",
			"title": "office chairs pop up",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-11-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".pop_up_desktop_menu_office-chairs",
							"selectorGuids": ["dba63950-0a69-ca71-f9a0-8eaaf36f3a2e"]
						},
						"value": "none"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-11-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".pop_up_desktop_menu_office-chairs",
							"selectorGuids": ["dba63950-0a69-ca71-f9a0-8eaaf36f3a2e"]
						},
						"value": "flex"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1713699577156
		},
		"a-12": {
			"id": "a-12",
			"title": "clouse office chairs",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-12-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".pop_up_desktop_menu_office-chairs",
							"selectorGuids": ["dba63950-0a69-ca71-f9a0-8eaaf36f3a2e"]
						},
						"value": "flex"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-12-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".pop_up_desktop_menu_office-chairs",
							"selectorGuids": ["dba63950-0a69-ca71-f9a0-8eaaf36f3a2e"]
						},
						"value": "none"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1713699915571
		},
		"a-13": {
			"id": "a-13",
			"title": "seats_clouse",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-13-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".pop_up_desktop_menu_office-seats",
							"selectorGuids": ["cba420a3-a6fe-6070-8968-0fa2aabd2ed6"]
						},
						"value": "flex"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-13-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".pop_up_desktop_menu_office-seats",
							"selectorGuids": ["cba420a3-a6fe-6070-8968-0fa2aabd2ed6"]
						},
						"value": "none"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1713729182501
		},
		"a-14": {
			"id": "a-14",
			"title": "seats_open",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-14-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".pop_up_desktop_menu_office-seats",
							"selectorGuids": ["cba420a3-a6fe-6070-8968-0fa2aabd2ed6"]
						},
						"value": "none"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-14-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".pop_up_desktop_menu_office-seats",
							"selectorGuids": ["cba420a3-a6fe-6070-8968-0fa2aabd2ed6"]
						},
						"value": "flex"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1713729261047
		},
		"a-15": {
			"id": "a-15",
			"title": "clouse_metal furniture",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-15-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".pop_up_desktop_menu_metal-furniture",
							"selectorGuids": ["98638ace-10e8-eab6-ea25-1de9695d11a2"]
						},
						"value": "flex"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-15-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".pop_up_desktop_menu_metal-furniture",
							"selectorGuids": ["98638ace-10e8-eab6-ea25-1de9695d11a2"]
						},
						"value": "none"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1713731501968
		},
		"a-16": {
			"id": "a-16",
			"title": "menu_open_metal furniture",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-16-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".pop_up_desktop_menu_metal-furniture",
							"selectorGuids": ["98638ace-10e8-eab6-ea25-1de9695d11a2"]
						},
						"value": "none"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-16-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".pop_up_desktop_menu_metal-furniture",
							"selectorGuids": ["98638ace-10e8-eab6-ea25-1de9695d11a2"]
						},
						"value": "flex"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1713731597683
		},
		"a-17": {
			"id": "a-17",
			"title": "New Timed Animation",
			"actionItemGroups": [],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1713732556973
		},
		"a-18": {
			"id": "a-18",
			"title": "drop_animate",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-18-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".drop_question",
							"selectorGuids": ["5135ed9f-d908-5290-52f7-66c71f13a3e7"]
						},
						"heightValue": 0,
						"widthUnit": "PX",
						"heightUnit": "px",
						"locked": false
					}
				}, {
					"id": "a-18-n-2",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".drop_question",
							"selectorGuids": ["5135ed9f-d908-5290-52f7-66c71f13a3e7"]
						},
						"widthUnit": "PX",
						"heightUnit": "AUTO",
						"locked": false
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-18-n-3",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".icon_question",
							"selectorGuids": ["44c1579d-0d39-391b-b528-6120f89c288a"]
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1713776219789
		},
		"a-19": {
			"id": "a-19",
			"title": "list_close",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-19-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".icon_question",
							"selectorGuids": ["44c1579d-0d39-391b-b528-6120f89c288a"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1713780684053
		},
		"a-20": {
			"id": "a-20",
			"title": "drop_animate_podval_mobile",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-20-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".icon_dropdown_catalog",
							"selectorGuids": ["3b96a78b-6566-41a3-e1fa-c45c204665f4"]
						},
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}, {
					"id": "a-20-n-3",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".order_a_service_dropdown_mobile",
							"selectorGuids": ["52cb5f0f-9010-9891-d0a1-86fcd8456a84"]
						},
						"value": "block"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-20-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".icon_dropdown_catalog",
							"selectorGuids": ["3b96a78b-6566-41a3-e1fa-c45c204665f4"]
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1713789875536
		},
		"a-21": {
			"id": "a-21",
			"title": "drop_animate_podval_mobile",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-21-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".icon_dropdown_catalog",
							"selectorGuids": ["3b96a78b-6566-41a3-e1fa-c45c204665f4"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1713790036334
		},
		"a-23": {
			"id": "a-23",
			"title": "botton_close",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-23-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".close_menu_modile",
							"selectorGuids": ["1d1ce959-2ad4-25cf-eb2a-fb083f9c2dad"]
						},
						"value": "none"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-23-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".close_menu_modile",
							"selectorGuids": ["1d1ce959-2ad4-25cf-eb2a-fb083f9c2dad"]
						},
						"value": "flex"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1713883210234
		},
		"a-25": {
			"id": "a-25",
			"title": "modal_window",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-25-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".modal_window",
							"selectorGuids": ["94f03976-93d2-16de-0143-fcd0432114e5"]
						},
						"value": "none"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-25-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".modal_window",
							"selectorGuids": ["94f03976-93d2-16de-0143-fcd0432114e5"]
						},
						"value": "flex"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1714035656902
		},
		"a-27": {
			"id": "a-27",
			"title": "close_form_pop_up",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-27-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".pop_up_mail_form",
							"selectorGuids": ["1d19b00b-cc52-3f28-ea51-cc6af16e2a5f"]
						},
						"value": "none"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1714129913406
		},
		"a-26": {
			"id": "a-26",
			"title": "open_form_pop_up",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-26-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"id": "661e83da8fbaf4fb3ed491cb|8779350f-039a-d057-2b4b-9db0670e0a0a"
						},
						"value": "none"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-26-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"id": "661e83da8fbaf4fb3ed491cb|8779350f-039a-d057-2b4b-9db0670e0a0a"
						},
						"value": "flex"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1714129818876
		},
		"a-28": {
			"id": "a-28",
			"title": "hover_slide_collection",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-28-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".left_click_slide",
							"selectorGuids": ["4b4a48c6-e1b1-ce81-fbdb-67b28b3bd93e"]
						},
						"value": "none"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-28-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".left_click_slide",
							"selectorGuids": ["4b4a48c6-e1b1-ce81-fbdb-67b28b3bd93e"]
						},
						"value": "flex"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1714138077752
		},
		"a-29": {
			"id": "a-29",
			"title": "on_hover_collection",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-29-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".left_click_slide",
							"selectorGuids": ["4b4a48c6-e1b1-ce81-fbdb-67b28b3bd93e"]
						},
						"value": "none"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1714138162477
		},
		"a-30": {
			"id": "a-30",
			"title": "hover_card_collection",
			"actionItemGroups": [],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1714138631790
		},
		"a-31": {
			"id": "a-31",
			"title": "pagination hover",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-31-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".pagination_slide",
							"selectorGuids": ["faeabc47-df3d-52de-f41f-d2cbaf06e1aa"]
						},
						"value": "none"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-31-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".pagination_slide",
							"selectorGuids": ["faeabc47-df3d-52de-f41f-d2cbaf06e1aa"]
						},
						"value": "flex"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1714141511141
		},
		"a-32": {
			"id": "a-32",
			"title": "pagination_on",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-32-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".pagination_slide",
							"selectorGuids": ["faeabc47-df3d-52de-f41f-d2cbaf06e1aa"]
						},
						"value": "none"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1714141600956
		},
		"a-33": {
			"id": "a-33",
			"title": "hover_number",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-33-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".hover_numb",
							"selectorGuids": ["2902835a-a1d0-513f-1d31-3bcf80424541"]
						},
						"value": "none"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-33-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 200,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".hover_numb",
							"selectorGuids": ["2902835a-a1d0-513f-1d31-3bcf80424541"]
						},
						"value": "flex"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1714204510323
		},
		"a-34": {
			"id": "a-34",
			"title": "on hover number top menu",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-34-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 100,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".hover_numb",
							"selectorGuids": ["2902835a-a1d0-513f-1d31-3bcf80424541"]
						},
						"value": "none"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1714204786495
		},
		"a-35": {
			"id": "a-35",
			"title": "rotate",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-35-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".icon_drop_number",
							"selectorGuids": ["d6992cb0-8146-93a9-f0e6-977f6b3ea609"]
						},
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-35-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".icon_drop_number",
							"selectorGuids": ["d6992cb0-8146-93a9-f0e6-977f6b3ea609"]
						},
						"yValue": 0,
						"zValue": -180,
						"xUnit": "DEG",
						"yUnit": "deg",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1714213483871
		},
		"a-36": {
			"id": "a-36",
			"title": "rotate_close",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-36-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".icon_drop_number",
							"selectorGuids": ["d6992cb0-8146-93a9-f0e6-977f6b3ea609"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1714213551193
		},
		"a-37": {
			"id": "a-37",
			"title": "hover_about_company",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-37-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".hover_about",
							"selectorGuids": ["c1eed302-9b71-6f91-8814-8c6a355393b4"]
						},
						"value": "none"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-37-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".hover_about",
							"selectorGuids": ["c1eed302-9b71-6f91-8814-8c6a355393b4"]
						},
						"value": "flex"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1714217196701
		},
		"a-38": {
			"id": "a-38",
			"title": "on hover_about_company",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-38-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".hover_about",
							"selectorGuids": ["c1eed302-9b71-6f91-8814-8c6a355393b4"]
						},
						"value": "none"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1714217246568
		},
		"a-39": {
			"id": "a-39",
			"title": "icon_rotate_about_drop",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-39-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".icon_drop_about",
							"selectorGuids": ["79397814-6343-bb05-577c-c42c19ce1a03"]
						},
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-39-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".icon_drop_about",
							"selectorGuids": ["79397814-6343-bb05-577c-c42c19ce1a03"]
						},
						"zValue": -180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1714217450162
		},
		"a-40": {
			"id": "a-40",
			"title": "icon_drop_about_on_hover",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-40-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".icon_drop_about",
							"selectorGuids": ["79397814-6343-bb05-577c-c42c19ce1a03"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1714217569780
		},
		"a-42": {
			"id": "a-42",
			"title": "close_filter",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-42-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".pop_up_desktop_menu_filter",
							"selectorGuids": ["4709157a-76e3-4221-69e8-8488d88b08be"]
						},
						"value": "none"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1715721975533
		},
		"a-43": {
			"id": "a-43",
			"title": "open_filter",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-43-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".pop_up_desktop_menu_filter",
							"selectorGuids": ["4709157a-76e3-4221-69e8-8488d88b08be"]
						},
						"value": "none"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-43-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".pop_up_desktop_menu_filter",
							"selectorGuids": ["4709157a-76e3-4221-69e8-8488d88b08be"]
						},
						"value": "flex"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1715722136446
		},
		"a-51": {
			"id": "a-51",
			"title": "drop_color_animate 2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-51-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".color_filter",
							"selectorGuids": ["4ce0ec4c-b05e-a0be-3d24-43afe5d3350d"]
						},
						"widthUnit": "PX",
						"heightUnit": "AUTO",
						"locked": false
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-51-n-2",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".color_filter",
							"selectorGuids": ["4ce0ec4c-b05e-a0be-3d24-43afe5d3350d"]
						},
						"heightValue": 50,
						"widthUnit": "PX",
						"heightUnit": "px",
						"locked": false
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1715762480705
		},
		"a-52": {
			"id": "a-52",
			"title": "drop_color_animate_click2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-52-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".color_filter",
							"selectorGuids": ["4ce0ec4c-b05e-a0be-3d24-43afe5d3350d"]
						},
						"heightValue": 50,
						"widthUnit": "PX",
						"heightUnit": "px",
						"locked": false
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-52-n-2",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".color_filter",
							"selectorGuids": ["4ce0ec4c-b05e-a0be-3d24-43afe5d3350d"]
						},
						"widthUnit": "PX",
						"heightUnit": "AUTO",
						"locked": false
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1715762480705
		},
		"a-53": {
			"id": "a-53",
			"title": "rotate_icon_color",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-53-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".filter_icon_color",
							"selectorGuids": ["92a48dc9-1096-b425-929e-49f433f9841b"]
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-53-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 200,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".filter_icon_color",
							"selectorGuids": ["92a48dc9-1096-b425-929e-49f433f9841b"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1715767737800
		},
		"a-58": {
			"id": "a-58",
			"title": "rotate_icon_color 2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-58-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 200,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".filter_icon_color",
							"selectorGuids": ["92a48dc9-1096-b425-929e-49f433f9841b"]
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1715767737800
		},
		"a-55": {
			"id": "a-55",
			"title": "show_more_animate",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-55-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".show-more",
							"selectorGuids": ["b6fe965d-abf2-47d1-d326-5d6a33c29208"]
						},
						"heightValue": 24,
						"widthUnit": "PX",
						"heightUnit": "px",
						"locked": false
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-55-n-2",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".show-more",
							"selectorGuids": ["b6fe965d-abf2-47d1-d326-5d6a33c29208"]
						},
						"widthUnit": "PX",
						"heightUnit": "AUTO",
						"locked": false
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1715771381267
		},
		"a-56": {
			"id": "a-56",
			"title": "show_more_animate_2click",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-56-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".show-more",
							"selectorGuids": ["b6fe965d-abf2-47d1-d326-5d6a33c29208"]
						},
						"widthUnit": "PX",
						"heightUnit": "AUTO",
						"locked": false
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-56-n-2",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".show-more",
							"selectorGuids": ["b6fe965d-abf2-47d1-d326-5d6a33c29208"]
						},
						"heightValue": 24,
						"widthUnit": "PX",
						"heightUnit": "px",
						"locked": false
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1715771381267
		},
		"a-57": {
			"id": "a-57",
			"title": "rotate_icon_color _show_more",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-57-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".filter_icon_show-more",
							"selectorGuids": ["01b90e62-2d30-254e-983d-be1c548b70b6"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-57-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 200,
						"target": {
							"selector": ".filter_icon_show-more",
							"selectorGuids": ["01b90e62-2d30-254e-983d-be1c548b70b6"]
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1715767737800
		},
		"a-54": {
			"id": "a-54",
			"title": "rotate_icon_color_2click_show_more",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-54-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 200,
						"target": {
							"selector": ".filter_icon_show-more",
							"selectorGuids": ["01b90e62-2d30-254e-983d-be1c548b70b6"]
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-54-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 200,
						"target": {
							"selector": ".filter_icon_show-more",
							"selectorGuids": ["01b90e62-2d30-254e-983d-be1c548b70b6"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1715767737800
		},
		"a-59": {
			"id": "a-59",
			"title": "drop_style_animate_1click",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-59-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".style_filter",
							"selectorGuids": ["82759c3f-d8a5-b0fb-420f-166d5f6e2338"]
						},
						"widthUnit": "PX",
						"heightUnit": "AUTO",
						"locked": false
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-59-n-2",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".style_filter",
							"selectorGuids": ["82759c3f-d8a5-b0fb-420f-166d5f6e2338"]
						},
						"heightValue": 50,
						"widthUnit": "PX",
						"heightUnit": "px",
						"locked": false
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1715762480705
		},
		"a-60": {
			"id": "a-60",
			"title": "drop_style_animate_click2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-60-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".style_filter",
							"selectorGuids": ["82759c3f-d8a5-b0fb-420f-166d5f6e2338"]
						},
						"heightValue": 50,
						"widthUnit": "PX",
						"heightUnit": "px",
						"locked": false
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-60-n-2",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".style_filter",
							"selectorGuids": ["82759c3f-d8a5-b0fb-420f-166d5f6e2338"]
						},
						"widthUnit": "PX",
						"heightUnit": "AUTO",
						"locked": false
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1715762480705
		},
		"a-61": {
			"id": "a-61",
			"title": "drop_collection_animate",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-61-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".collection_filter",
							"selectorGuids": ["04f1f70d-206b-5dbe-a3eb-1802a4da3429"]
						},
						"heightValue": 50,
						"widthUnit": "PX",
						"heightUnit": "px",
						"locked": false
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-61-n-2",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".collection_filter",
							"selectorGuids": ["04f1f70d-206b-5dbe-a3eb-1802a4da3429"]
						},
						"widthUnit": "PX",
						"heightUnit": "AUTO",
						"locked": false
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1715851147978
		},
		"a-62": {
			"id": "a-62",
			"title": "drop_collection_animate_2click",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-62-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".collection_filter",
							"selectorGuids": ["04f1f70d-206b-5dbe-a3eb-1802a4da3429"]
						},
						"heightValue": 50,
						"widthUnit": "PX",
						"heightUnit": "px",
						"locked": false
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1715851296272
		},
		"a-63": {
			"id": "a-63",
			"title": "drop_price_filter",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-63-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".price_filter",
							"selectorGuids": ["05285da3-5f94-b0cf-6333-99637f0059a8"]
						},
						"widthUnit": "PX",
						"heightUnit": "AUTO",
						"locked": false
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-63-n-2",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".price_filter",
							"selectorGuids": ["05285da3-5f94-b0cf-6333-99637f0059a8"]
						},
						"heightValue": 50,
						"widthUnit": "PX",
						"heightUnit": "px",
						"locked": false
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1715854589914
		},
		"a-64": {
			"id": "a-64",
			"title": "drop_price_2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-64-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".price_filter",
							"selectorGuids": ["05285da3-5f94-b0cf-6333-99637f0059a8"]
						},
						"heightValue": 50,
						"widthUnit": "PX",
						"heightUnit": "px",
						"locked": false
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-64-n-2",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".price_filter",
							"selectorGuids": ["05285da3-5f94-b0cf-6333-99637f0059a8"]
						},
						"widthUnit": "PX",
						"heightUnit": "AUTO",
						"locked": false
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1715854864754
		},
		"a-65": {
			"id": "a-65",
			"title": "rotate_icon_price",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-65-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".filter_icon_price",
							"selectorGuids": ["7ba476e9-5679-ad4f-4d75-a84237769848"]
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-65-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".filter_icon_price",
							"selectorGuids": ["7ba476e9-5679-ad4f-4d75-a84237769848"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1715861177396
		},
		"a-66": {
			"id": "a-66",
			"title": "rotate_icon_price-2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-66-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".filter_icon_price",
							"selectorGuids": ["7ba476e9-5679-ad4f-4d75-a84237769848"]
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1715861284971
		},
		"a-67": {
			"id": "a-67",
			"title": "swiitch",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-67-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".switcher-ellipse",
							"selectorGuids": ["555fc233-9622-015e-3312-c259e2529a41"]
						},
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-67-n-2",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".switcher-ellipse",
							"selectorGuids": ["555fc233-9622-015e-3312-c259e2529a41"]
						},
						"xValue": 18,
						"xUnit": "px",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1715889378127
		},
		"a-68": {
			"id": "a-68",
			"title": "swiitch_2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-68-n",
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".switcher-ellipse",
							"selectorGuids": ["555fc233-9622-015e-3312-c259e2529a41"]
						},
						"xValue": 0,
						"xUnit": "px",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1715889530654
		},
		"a-69": {
			"id": "a-69",
			"title": "color_switch",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-69-n",
					"actionTypeId": "STYLE_BORDER",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".switcher",
							"selectorGuids": ["b95d794e-a721-f0a1-35b5-72417ca65029"]
						},
						"globalSwatchId": "--txt_collection",
						"rValue": 190,
						"bValue": 190,
						"gValue": 190,
						"aValue": 1
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-69-n-2",
					"actionTypeId": "STYLE_BORDER",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".switcher",
							"selectorGuids": ["b95d794e-a721-f0a1-35b5-72417ca65029"]
						},
						"globalSwatchId": "--black-remi",
						"rValue": 14,
						"bValue": 14,
						"gValue": 14,
						"aValue": 1
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1715892710447
		},
		"a-70": {
			"id": "a-70",
			"title": "color_switch 2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-70-n",
					"actionTypeId": "STYLE_BORDER",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 200,
						"target": {
							"selector": ".switcher",
							"selectorGuids": ["b95d794e-a721-f0a1-35b5-72417ca65029"]
						},
						"globalSwatchId": "--black-remi",
						"rValue": 14,
						"bValue": 14,
						"gValue": 14,
						"aValue": 1
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-70-n-2",
					"actionTypeId": "STYLE_BORDER",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 200,
						"target": {
							"selector": ".switcher",
							"selectorGuids": ["b95d794e-a721-f0a1-35b5-72417ca65029"]
						},
						"globalSwatchId": "--txt_collection",
						"rValue": 190,
						"bValue": 190,
						"gValue": 190,
						"aValue": 1
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1715892710447
		},
		"a-71": {
			"id": "a-71",
			"title": "ellipse_color",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-71-n",
					"actionTypeId": "STYLE_BACKGROUND_COLOR",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".switcher-ellipse",
							"selectorGuids": ["555fc233-9622-015e-3312-c259e2529a41"]
						},
						"globalSwatchId": "--txt_collection",
						"rValue": 190,
						"bValue": 190,
						"gValue": 190,
						"aValue": 1
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-71-n-2",
					"actionTypeId": "STYLE_BACKGROUND_COLOR",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".switcher-ellipse",
							"selectorGuids": ["555fc233-9622-015e-3312-c259e2529a41"]
						},
						"globalSwatchId": "--remi-red",
						"rValue": 227,
						"bValue": 36,
						"gValue": 30,
						"aValue": 1
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1715893272784
		},
		"a-72": {
			"id": "a-72",
			"title": "ellipse_color 2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-72-n",
					"actionTypeId": "STYLE_BACKGROUND_COLOR",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 200,
						"target": {
							"selector": ".switcher-ellipse",
							"selectorGuids": ["555fc233-9622-015e-3312-c259e2529a41"]
						},
						"globalSwatchId": "--remi-red",
						"rValue": 227,
						"bValue": 36,
						"gValue": 30,
						"aValue": 1
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-72-n-2",
					"actionTypeId": "STYLE_BACKGROUND_COLOR",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 200,
						"target": {
							"selector": ".switcher-ellipse",
							"selectorGuids": ["555fc233-9622-015e-3312-c259e2529a41"]
						},
						"globalSwatchId": "--txt_collection",
						"rValue": 190,
						"bValue": 190,
						"gValue": 190,
						"aValue": 1
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1715893272784
		},
		"a-75": {
			"id": "a-75",
			"title": "rotate_icon_sorting",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-75-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".icon_drop_sorting",
							"selectorGuids": ["0ac4d18c-5d79-f6b5-1160-2b3845069e37"]
						},
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-75-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".icon_drop_sorting",
							"selectorGuids": ["0ac4d18c-5d79-f6b5-1160-2b3845069e37"]
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1715895065436
		},
		"a-76": {
			"id": "a-76",
			"title": "rotate_icon_sorting 2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-76-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 300,
						"target": {
							"selector": ".icon_drop_sorting",
							"selectorGuids": ["0ac4d18c-5d79-f6b5-1160-2b3845069e37"]
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-76-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 300,
						"target": {
							"selector": ".icon_drop_sorting",
							"selectorGuids": ["0ac4d18c-5d79-f6b5-1160-2b3845069e37"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1715895065436
		},
		"a-73": {
			"id": "a-73",
			"title": "dropdown_list_sorting",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-73-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".drop_sorting",
							"selectorGuids": ["46733bc6-75f5-65c3-b597-98f3eb76975b"]
						},
						"value": "none"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-73-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".drop_sorting",
							"selectorGuids": ["46733bc6-75f5-65c3-b597-98f3eb76975b"]
						},
						"value": "flex"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1715894925399
		},
		"a-74": {
			"id": "a-74",
			"title": "dropdown_list_sorting 2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-74-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".drop_sorting",
							"selectorGuids": ["46733bc6-75f5-65c3-b597-98f3eb76975b"]
						},
						"value": "flex"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-74-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 200,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".drop_sorting",
							"selectorGuids": ["46733bc6-75f5-65c3-b597-98f3eb76975b"]
						},
						"value": "none"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1715894925399
		},
		"a-77": {
			"id": "a-77",
			"title": "close_pop-up_sort",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-77-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".drop_sorting",
							"selectorGuids": ["46733bc6-75f5-65c3-b597-98f3eb76975b"]
						},
						"value": "flex"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-77-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 200,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".drop_sorting",
							"selectorGuids": ["46733bc6-75f5-65c3-b597-98f3eb76975b"]
						},
						"value": "none"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1715894925399
		},
		"a-78": {
			"id": "a-78",
			"title": "rotate_icon_sorting_hide",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-78-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 300,
						"target": {
							"selector": ".icon_drop_sorting",
							"selectorGuids": ["0ac4d18c-5d79-f6b5-1160-2b3845069e37"]
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-78-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 300,
						"target": {
							"selector": ".icon_drop_sorting",
							"selectorGuids": ["0ac4d18c-5d79-f6b5-1160-2b3845069e37"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1715895065436
		},
		"a-79": {
			"id": "a-79",
			"title": "drop_pop_sort",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-79-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".drop_sorting_pop",
							"selectorGuids": ["bb4a0224-4f7e-e82a-eeda-d38ebe0b4746"]
						},
						"value": "none"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-79-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".drop_sorting_pop",
							"selectorGuids": ["bb4a0224-4f7e-e82a-eeda-d38ebe0b4746"]
						},
						"value": "flex"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1715936270394
		},
		"a-80": {
			"id": "a-80",
			"title": "drop_pop_sort 2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-80-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".drop_sorting_pop",
							"selectorGuids": ["bb4a0224-4f7e-e82a-eeda-d38ebe0b4746"]
						},
						"value": "flex"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-80-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".drop_sorting_pop",
							"selectorGuids": ["bb4a0224-4f7e-e82a-eeda-d38ebe0b4746"]
						},
						"value": "none"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1715936270394
		},
		"a-81": {
			"id": "a-81",
			"title": "style icon rotate",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-81-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".filter_icon_style",
							"selectorGuids": ["1858772a-1fcc-bb1f-227f-44abb4b8844e"]
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-81-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".filter_icon_style",
							"selectorGuids": ["1858772a-1fcc-bb1f-227f-44abb4b8844e"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1715941336328
		},
		"a-82": {
			"id": "a-82",
			"title": "style icon rotate 2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-82-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".filter_icon_style",
							"selectorGuids": ["1858772a-1fcc-bb1f-227f-44abb4b8844e"]
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1715941336328
		},
		"a-83": {
			"id": "a-83",
			"title": "rotate_icon_collection",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-83-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".filter_icon_collection",
							"selectorGuids": ["3db36602-111b-302b-35e0-656053315fcb"]
						},
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-83-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".filter_icon_collection",
							"selectorGuids": ["3db36602-111b-302b-35e0-656053315fcb"]
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1715941519330
		},
		"a-84": {
			"id": "a-84",
			"title": "rotate_icon_collection 2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-84-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".filter_icon_collection",
							"selectorGuids": ["3db36602-111b-302b-35e0-656053315fcb"]
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-84-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".filter_icon_collection",
							"selectorGuids": ["3db36602-111b-302b-35e0-656053315fcb"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1715941519330
		},
		"a-85": {
			"id": "a-85",
			"title": "drop_price_1920",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-85-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".price_filter_1920px",
							"selectorGuids": ["d9b418f1-b1a9-5d37-1e3e-e84c6c142dbb"]
						},
						"widthUnit": "PX",
						"heightUnit": "AUTO",
						"locked": false
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-85-n-2",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".price_filter_1920px",
							"selectorGuids": ["d9b418f1-b1a9-5d37-1e3e-e84c6c142dbb"]
						},
						"heightValue": 50,
						"widthUnit": "PX",
						"heightUnit": "px",
						"locked": false
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1715941939443
		},
		"a-86": {
			"id": "a-86",
			"title": "drop_price_1920 2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-86-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".price_filter_1920px",
							"selectorGuids": ["d9b418f1-b1a9-5d37-1e3e-e84c6c142dbb"]
						},
						"heightValue": 50,
						"widthUnit": "PX",
						"heightUnit": "px",
						"locked": false
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-86-n-2",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".price_filter_1920px",
							"selectorGuids": ["d9b418f1-b1a9-5d37-1e3e-e84c6c142dbb"]
						},
						"widthUnit": "PX",
						"heightUnit": "AUTO",
						"locked": false
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1715941939443
		},
		"a-87": {
			"id": "a-87",
			"title": "rotate_icon_price_1920",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-87-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".filter_icon_price_1920px",
							"selectorGuids": ["8a5f3182-47ff-3fdd-7cf1-d5563a7aea89"]
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-87-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".filter_icon_price_1920px",
							"selectorGuids": ["8a5f3182-47ff-3fdd-7cf1-d5563a7aea89"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1715942182617
		},
		"a-88": {
			"id": "a-88",
			"title": "rotate_icon_price_1920 2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-88-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".filter_icon_price_1920px",
							"selectorGuids": ["8a5f3182-47ff-3fdd-7cf1-d5563a7aea89"]
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1715942182617
		},
		"a-89": {
			"id": "a-89",
			"title": "color_drop_1920",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-89-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".color_filter_1920px",
							"selectorGuids": ["40746cef-f8fd-26e1-2fd6-0614657dc2b8"]
						},
						"widthUnit": "PX",
						"heightUnit": "AUTO",
						"locked": false
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-89-n-2",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".color_filter_1920px",
							"selectorGuids": ["40746cef-f8fd-26e1-2fd6-0614657dc2b8"]
						},
						"heightValue": 80,
						"widthUnit": "PX",
						"heightUnit": "px",
						"locked": false
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1715942343364
		},
		"a-90": {
			"id": "a-90",
			"title": "color_drop_1920 2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-90-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".color_filter_1920px",
							"selectorGuids": ["40746cef-f8fd-26e1-2fd6-0614657dc2b8"]
						},
						"heightValue": 80,
						"widthUnit": "PX",
						"heightUnit": "px",
						"locked": false
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-90-n-2",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".color_filter_1920px",
							"selectorGuids": ["40746cef-f8fd-26e1-2fd6-0614657dc2b8"]
						},
						"widthUnit": "PX",
						"heightUnit": "AUTO",
						"locked": false
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1715942343364
		},
		"a-91": {
			"id": "a-91",
			"title": "rotate_icon_color 1920",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-91-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".filter_icon_color_1920px",
							"selectorGuids": ["00198b17-9ade-1bc8-f1d8-5e95ef1209ed"]
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-91-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".filter_icon_color_1920px",
							"selectorGuids": ["00198b17-9ade-1bc8-f1d8-5e95ef1209ed"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1715942805241
		},
		"a-92": {
			"id": "a-92",
			"title": "rotate_icon_color 1921",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-92-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".filter_icon_color_1920px",
							"selectorGuids": ["00198b17-9ade-1bc8-f1d8-5e95ef1209ed"]
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1715942805241
		},
		"a-93": {
			"id": "a-93",
			"title": "drop_style_1920px",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-93-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".style_filter_1920px",
							"selectorGuids": ["8ab5fdff-c747-5015-407e-e703eea5c2ae"]
						},
						"widthUnit": "PX",
						"heightUnit": "AUTO",
						"locked": false
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-93-n-2",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".style_filter_1920px",
							"selectorGuids": ["8ab5fdff-c747-5015-407e-e703eea5c2ae"]
						},
						"heightValue": 50,
						"widthUnit": "PX",
						"heightUnit": "px",
						"locked": false
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1715944150450
		},
		"a-94": {
			"id": "a-94",
			"title": "drop_style_1920px 2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-94-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".style_filter_1920px",
							"selectorGuids": ["8ab5fdff-c747-5015-407e-e703eea5c2ae"]
						},
						"heightValue": 50,
						"widthUnit": "PX",
						"heightUnit": "px",
						"locked": false
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-94-n-2",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".style_filter_1920px",
							"selectorGuids": ["8ab5fdff-c747-5015-407e-e703eea5c2ae"]
						},
						"widthUnit": "PX",
						"heightUnit": "AUTO",
						"locked": false
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1715944150450
		},
		"a-95": {
			"id": "a-95",
			"title": "rotate_icon_style_1920",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-95-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".filter_icon_style_1920px",
							"selectorGuids": ["46a99e1b-f542-9e89-c6e1-17d09fe24dd4"]
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-95-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".filter_icon_style_1920px",
							"selectorGuids": ["46a99e1b-f542-9e89-c6e1-17d09fe24dd4"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1715944552073
		},
		"a-96": {
			"id": "a-96",
			"title": "rotate_icon_style_1920 2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-96-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".filter_icon_style_1920px",
							"selectorGuids": ["46a99e1b-f542-9e89-c6e1-17d09fe24dd4"]
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1715944552073
		},
		"a-97": {
			"id": "a-97",
			"title": "drop_collection_1920",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-97-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".collection_filter_1920px",
							"selectorGuids": ["9f318215-219c-038e-187d-c190a6506b46"]
						},
						"heightValue": 50,
						"widthUnit": "PX",
						"heightUnit": "px",
						"locked": false
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-97-n-2",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".collection_filter_1920px",
							"selectorGuids": ["9f318215-219c-038e-187d-c190a6506b46"]
						},
						"widthUnit": "PX",
						"heightUnit": "AUTO",
						"locked": false
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1715944714187
		},
		"a-98": {
			"id": "a-98",
			"title": "drop_collection_1920 2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-98-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".collection_filter_1920px",
							"selectorGuids": ["9f318215-219c-038e-187d-c190a6506b46"]
						},
						"widthUnit": "PX",
						"heightUnit": "AUTO",
						"locked": false
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-98-n-2",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".collection_filter_1920px",
							"selectorGuids": ["9f318215-219c-038e-187d-c190a6506b46"]
						},
						"heightValue": 50,
						"widthUnit": "PX",
						"heightUnit": "px",
						"locked": false
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1715944714187
		},
		"a-99": {
			"id": "a-99",
			"title": "rotate_collection",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-99-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".filter_icon_collection_1920px",
							"selectorGuids": ["4336233a-0333-5fec-c055-58147ba2cf84"]
						},
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-99-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".filter_icon_collection_1920px",
							"selectorGuids": ["4336233a-0333-5fec-c055-58147ba2cf84"]
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1715944858045
		},
		"a-100": {
			"id": "a-100",
			"title": "rotate_collection 2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-100-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".filter_icon_collection_1920px",
							"selectorGuids": ["4336233a-0333-5fec-c055-58147ba2cf84"]
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-100-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".filter_icon_collection_1920px",
							"selectorGuids": ["4336233a-0333-5fec-c055-58147ba2cf84"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1715944858045
		},
		"a-101": {
			"id": "a-101",
			"title": "drop_seo",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-101-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".show_more_drop_down_active",
							"selectorGuids": ["096d21ac-abc0-e8d3-1fc5-56b22fb735de"]
						},
						"heightValue": 0,
						"widthUnit": "PX",
						"heightUnit": "px",
						"locked": false
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-101-n-2",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".show_more_drop_down_active",
							"selectorGuids": ["096d21ac-abc0-e8d3-1fc5-56b22fb735de"]
						},
						"widthUnit": "PX",
						"heightUnit": "AUTO",
						"locked": false
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1716199493435
		},
		"a-104": {
			"id": "a-104",
			"title": "drop_seo 2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-104-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".show_more_drop_down_active",
							"selectorGuids": ["096d21ac-abc0-e8d3-1fc5-56b22fb735de"]
						},
						"heightValue": 0,
						"widthUnit": "PX",
						"heightUnit": "px",
						"locked": false
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1716199493435
		},
		"a-102": {
			"id": "a-102",
			"title": "rotate_seo",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-102-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".icon_div_seo_rotate",
							"selectorGuids": ["b04633e8-acde-3e59-5efa-308c2b7af428"]
						},
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-102-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".icon_div_seo_rotate",
							"selectorGuids": ["b04633e8-acde-3e59-5efa-308c2b7af428"]
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1716199600652
		},
		"a-103": {
			"id": "a-103",
			"title": "rotate_seo 2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-103-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 200,
						"target": {
							"selector": ".icon_div_seo_rotate",
							"selectorGuids": ["b04633e8-acde-3e59-5efa-308c2b7af428"]
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-103-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".icon_div_seo_rotate",
							"selectorGuids": ["b04633e8-acde-3e59-5efa-308c2b7af428"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1716199600652
		},
		"a-105": {
			"id": "a-105",
			"title": "dropdown_seo_text_2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-105-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".show_more_drop_down_active_2",
							"selectorGuids": ["635539fd-46e1-8a93-84dc-cc11d3b0e9f5"]
						},
						"heightValue": 0,
						"widthUnit": "PX",
						"heightUnit": "px",
						"locked": false
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-105-n-2",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".show_more_drop_down_active_2",
							"selectorGuids": ["635539fd-46e1-8a93-84dc-cc11d3b0e9f5"]
						},
						"widthUnit": "PX",
						"heightUnit": "AUTO",
						"locked": false
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1716200874161
		},
		"a-106": {
			"id": "a-106",
			"title": "dropdown_seo_text_2 2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-106-n",
					"actionTypeId": "STYLE_SIZE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".show_more_drop_down_active_2",
							"selectorGuids": ["635539fd-46e1-8a93-84dc-cc11d3b0e9f5"]
						},
						"heightValue": 0,
						"widthUnit": "PX",
						"heightUnit": "px",
						"locked": false
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1716200874161
		},
		"a-107": {
			"id": "a-107",
			"title": "rotate seo block 2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-107-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".icon_div_seo_rotate_2",
							"selectorGuids": ["81392a61-04f3-9888-21d8-39faeb0758d2"]
						},
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "DEG"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-107-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".icon_div_seo_rotate_2",
							"selectorGuids": ["81392a61-04f3-9888-21d8-39faeb0758d2"]
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1716201031525
		},
		"a-108": {
			"id": "a-108",
			"title": "rotate seo block 3",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-108-n",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 200,
						"target": {
							"selector": ".icon_div_seo_rotate_2",
							"selectorGuids": ["81392a61-04f3-9888-21d8-39faeb0758d2"]
						},
						"zValue": 180,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-108-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".icon_div_seo_rotate_2",
							"selectorGuids": ["81392a61-04f3-9888-21d8-39faeb0758d2"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1716201031525
		},
		"a-109": {
			"id": "a-109",
			"title": "ups hide",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-109-n",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".up",
							"selectorGuids": ["963a5d28-3836-4aaf-c495-6c2dd76b0d16"]
						},
						"value": 0,
						"unit": ""
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-109-n-2",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".up",
							"selectorGuids": ["963a5d28-3836-4aaf-c495-6c2dd76b0d16"]
						},
						"value": 1,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1716225978099
		},
		"a-110": {
			"id": "a-110",
			"title": "2 up",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-110-n",
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 500,
						"target": {
							"selector": ".up",
							"selectorGuids": ["963a5d28-3836-4aaf-c495-6c2dd76b0d16"]
						},
						"value": 0,
						"unit": ""
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1716226479901
		},
		"a-111": {
			"id": "a-111",
			"title": "tab",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-111-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".tab_product-tabs-in-the-photo_sticky",
							"selectorGuids": ["62071cbf-e341-1a61-f94f-aa1e2134ca02"]
						},
						"value": "none"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-111-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".tab_product-tabs-in-the-photo_sticky",
							"selectorGuids": ["62071cbf-e341-1a61-f94f-aa1e2134ca02"]
						},
						"value": "flex"
					}
				}]
			}],
			"useFirstGroupAsInitialState": true,
			"createdOn": 1716387047612
		},
		"a-112": {
			"id": "a-112",
			"title": "tab 2",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-112-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".tab_product-tabs-in-the-photo_sticky",
							"selectorGuids": ["62071cbf-e341-1a61-f94f-aa1e2134ca02"]
						},
						"value": "flex"
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-112-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"target": {
							"selector": ".tab_product-tabs-in-the-photo_sticky",
							"selectorGuids": ["62071cbf-e341-1a61-f94f-aa1e2134ca02"]
						},
						"value": "none"
					}
				}]
			}],
			"useFirstGroupAsInitialState": false,
			"createdOn": 1716387047612
		},
		"a-114": {
			"id": "a-114",
			"title": "open-form",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-114-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"value": "none",
						"target": {
							"selector": ".pop_up_mail_form",
							"selectorGuids": ["1d19b00b-cc52-3f28-ea51-cc6af16e2a5f"]
						}
					}
				}]
			}, {
				"actionItems": [{
					"id": "a-114-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"value": "flex",
						"target": {
							"selector": ".pop_up_mail_form",
							"selectorGuids": ["1d19b00b-cc52-3f28-ea51-cc6af16e2a5f"]
						}
					}
				}]
			}],
			"createdOn": 1717061244167,
			"useFirstGroupAsInitialState": true
		}
	},
	"site": {
		"mediaQueries": [{
			"key": "main",
			"min": 992,
			"max": 10000
		}, {
			"key": "medium",
			"min": 768,
			"max": 991
		}, {
			"key": "small",
			"min": 480,
			"max": 767
		}, {
			"key": "tiny",
			"min": 0,
			"max": 479
		}]
	}
});