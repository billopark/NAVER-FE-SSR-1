(() => {
  "use strict";
  var e = {
      986: (e) => {
        e.exports = require("body-parser");
      },
      582: (e) => {
        e.exports = require("cors");
      },
      860: (e) => {
        e.exports = require("express");
      },
      689: (e) => {
        e.exports = require("react");
      },
      684: (e) => {
        e.exports = require("react-dom/server");
      },
    },
    a = {};
  function t(r) {
    var l = a[r];
    if (void 0 !== l) return l.exports;
    var c = (a[r] = { exports: {} });
    return e[r](c, c.exports, t), c.exports;
  }
  (t.n = (e) => {
    var a = e && e.__esModule ? () => e.default : () => e;
    return t.d(a, { a }), a;
  }),
    (t.d = (e, a) => {
      for (var r in a)
        t.o(a, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: a[r] });
    }),
    (t.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (() => {
      var e = t(689),
        a = t.n(e);
      const r = "Gaofu0_WhLiZfSSlHHlK",
        l = require("@mui/icons-material/Cancel");
      var c = t.n(l);
      const m = require("@mui/icons-material/MicNone");
      var n = t.n(m);
      const s = require("@mui/icons-material/Search");
      var i = t.n(s);
      const o = function (e) {
          return a().createElement(
            "div",
            null,
            a().createElement(
              "div",
              { className: "yk2QQ0PLdw1FMQtzeoLK" },
              a().createElement(
                "div",
                { className: "raIWX0RIevESkKmDF5Wh" },
                "N"
              ),
              a().createElement("input", {
                className: "wO9AuZ1mSlqY8eEGb3qZ",
                placeholder: "검색어를 입력해주세요.",
                defaultValue: "불국사",
              }),
              a().createElement(c(), {
                className: "CvWCFkpm_Gfk1MrGVe1s",
                sx: { fontSize: 30 },
              }),
              a().createElement(n(), {
                className: "Rg0WwUXCTpI6XtH0HddY",
                sx: { fontSize: 45 },
              }),
              a().createElement(i(), {
                className: "txiw8yXn4NiOoG9GdPCJ",
                sx: { fontSize: 45 },
              })
            ),
            a().createElement(
              "div",
              { className: "HbbDATNACiQacSV__cwn" },
              a().createElement(
                "a",
                { className: "i5wVFzCNpmqROYJxu6aK", href: "#home" },
                "통합"
              ),
              a().createElement(
                "a",
                { className: r, href: "#image" },
                "이미지"
              ),
              a().createElement(
                "a",
                { className: r, href: "#knowledge" },
                "지식백과"
              ),
              a().createElement("a", { className: r, href: "#view" }, "VIEW"),
              a().createElement("a", { className: r, href: "#kin" }, "지식iN"),
              a().createElement(
                "a",
                { className: r, href: "#influencer" },
                "인플루언서"
              ),
              a().createElement(
                "a",
                { className: r, href: "#video" },
                "동영상"
              ),
              a().createElement(
                "a",
                { className: r, href: "#shopping" },
                "쇼핑"
              ),
              a().createElement("a", { className: r, href: "#news" }, "뉴스"),
              a().createElement(
                "a",
                { className: r, href: "#dictionary" },
                "어학사전"
              ),
              a().createElement("a", { className: r, href: "#map" }, "지도"),
              a().createElement("a", { className: r, href: "#book" }, "책"),
              a().createElement("a", { className: r, href: "#music" }, "뮤직"),
              a().createElement(
                "a",
                { className: r, href: "#audio" },
                "오디오클립"
              )
            )
          );
        },
        E = {
          commonModule: "Bn0XRpftswNx9EPiPPsQ",
          topBorder: "hp_QfyBgFrgd2sabiD7X",
          contentWrap: "ug_K208GTX5ib2lFbVx3",
        },
        N = "zqKn3ms1EpXpaqiFHl16",
        d = function (e) {
          return a().createElement(
            "div",
            { className: "w8v97tusKPqi0f50smB4" },
            a().createElement(
              "h2",
              { className: "qQxVniB5CMxBq70RkIZ1" },
              e.title.name
            ),
            a().createElement(
              "div",
              { className: "SGLLmckN7K323AlmRXT6" },
              a().createElement(
                "a",
                { className: "Qk2eREGyxz0SYFLcHTXf" },
                a().createElement("div", { className: "PxirEojwYS4HFNr5k2Wj" })
              )
            ),
            a().createElement(
              "div",
              {
                className: "spl1Tmt2bzFQ_o9HGiHW",
                style: { color: e.colorScheme.subTitle },
              },
              a().createElement("span", { className: N }, e.title.type),
              a().createElement("span", { className: "rE_2CjSK6Au6HP7CFwK6" }),
              a().createElement("span", { className: N }, e.title.subName)
            )
          );
        },
        f = "UpenaO3fzWKfrRWhnXOR",
        u = "F6JlJdKozDTguLRNhEHX",
        h = function (e) {
          return a().createElement(
            "div",
            { className: "AKvpsA5VvILGVv40MapP" },
            a().createElement(
              "ul",
              { className: "ZD5uPrErEIoI8Czs6osS" },
              a().createElement(
                "li",
                { className: f },
                a().createElement(
                  "a",
                  {
                    href: e.subTap.mainTap.href,
                    className: "FkbXTj3ln4sHSSPj3L2z",
                    style: { backgroundColor: e.colorScheme.subTapColor },
                  },
                  a().createElement(
                    "span",
                    { className: u },
                    e.subTap.mainTap.title
                  )
                )
              ),
              e.subTap.list.map(function (t, r) {
                return a().createElement(
                  "li",
                  { className: f, key: r },
                  a().createElement(
                    "a",
                    {
                      href: t.href,
                      className: "fcLye7hIRyUBIsHOYXmW",
                      style: { color: e.colorScheme.subTapColor },
                    },
                    0 !== r &&
                      a().createElement("span", {
                        className: "HOW7s48xMS79rdeewPcr",
                        style: { backgroundColor: e.colorScheme.subTapBar },
                      }),
                    a().createElement("span", { className: u }, t.title)
                  )
                );
              })
            )
          );
        },
        p = function (e) {
          return a().createElement(
            "div",
            { className: "V_biLkhbpj1TiFQG01hN" },
            a().createElement(
              "a",
              {
                href: e.similar.header.href,
                className: "L6y7q4VqgJX6pEwGqCd1",
              },
              a().createElement(
                "h3",
                { className: "opYSgc_qU8NwiRPi258Q" },
                e.similar.header.title
              ),
              a().createElement(
                "div",
                { className: "B9UDz_BXyNdOgnlK4GU2" },
                a().createElement("i", { className: "fas fa-arrow-right" })
              )
            ),
            a().createElement(
              "div",
              { className: "QonCLKyMnH4EZTJtJX6a" },
              a().createElement(
                "ul",
                { className: "EZC4ZkUZhJOygFL52u_X" },
                e.similar.list.map(function (e, t) {
                  return a().createElement(
                    "li",
                    { className: "iaNH7NzZRgviGNC1dBmX", key: t },
                    a().createElement(
                      "a",
                      { href: e.href, className: "OLwnrlzrFACPpAYMCoMg" },
                      a().createElement(
                        "div",
                        { className: "BJRAN0HWVVeLKtCkUlWO" },
                        a().createElement("img", {
                          src: e.src,
                          className: "TtgkT3w1qjE1T18xixS6",
                        })
                      ),
                      a().createElement(
                        "div",
                        { className: "XsfPU1nN5WDOI9Yml29U" },
                        e.title
                      )
                    )
                  );
                })
              )
            )
          );
        },
        v = function (e) {
          return a().createElement(
            a().Fragment,
            null,
            a().createElement(
              "ul",
              { className: "WxiekqtyUr7BdP58n1bP" },
              a().createElement(
                "li",
                { className: "Kt9p9SgnoPbdFvLcRySq" },
                a().createElement(
                  "a",
                  { href: e.mainImage.href, className: "Arl5d3fdDyFyzFhFffdA" },
                  a().createElement("img", {
                    src: e.mainImage.src,
                    className: "cMSuh5VzUCOn2YJVavc2",
                  })
                )
              ),
              e.smallImage.list.map(function (e, t) {
                return a().createElement(
                  "li",
                  { className: "rzakIO_nyAIdwEGr4Q8H", key: t },
                  a().createElement(
                    "a",
                    { href: e.href, className: "u1ySUEJkUEHH1H0Ilrcl" },
                    2 === t
                      ? a().createElement("img", {
                          src: e.src,
                          className: "EfiM7ANv1aMFljOCR9oG",
                        })
                      : a().createElement("img", {
                          src: e.src,
                          className: "VERd52ManLN8mR6JBJsf",
                        })
                  )
                );
              })
            )
          );
        },
        g = function (e) {
          return a().createElement(
            a().Fragment,
            null,
            a().createElement(
              "div",
              { className: "vP2QgGmdyFAbl3CqrG1N" },
              a().createElement(
                "a",
                { href: e.basicInfo.href, className: "uuVWS01zSxlf4Ge9eWFK" },
                a().createElement(
                  "h3",
                  { className: "wdX0IJmarE0jzckevmpk" },
                  e.basicInfo.title
                ),
                a().createElement(
                  "div",
                  { className: "sHx_H_1shk3I0VRjM8fJ" },
                  a().createElement("i", { className: "fas fa-arrow-right" })
                )
              )
            ),
            a().createElement(
              "div",
              { className: "hkPOC3cmG2So70H7eYen" },
              a().createElement(
                "span",
                { className: "dcpqblUXwdjUENZ3bA0S" },
                e.basicInfo.detail
              ),
              a().createElement(
                "a",
                {
                  href: e.basicInfo.moreDetails,
                  className: "Wj_CrBT9OoY0eL2Kuw8L",
                },
                "더보기"
              )
            )
          );
        },
        b = function (e) {
          return a().createElement(
            "div",
            { className: "mKVpa2NVZMsG58qsvqNp" },
            a().createElement(v, {
              mainImage: e.common.mainImage,
              smallImage: e.common.smallImage,
            }),
            a().createElement(g, { basicInfo: e.common.basicInfo })
          );
        },
        y = function (e) {
          return a().createElement(
            "div",
            { className: "MqKms0lrf0CEULJlxiuz" },
            a().createElement(
              "ul",
              { className: "rIgo2IAOkpGWECNYu17n" },
              e.common.imageList.map(function (t, r) {
                var l =
                  0 === r
                    ? "xZczpMtN8MvR9jLG93jy"
                    : r === e.common.imageList.length - 1
                    ? "OSm8GrXyUGa7J391Sgzb"
                    : "QwboBBqRJnQT_wkHCK3f";
                return a().createElement(
                  "li",
                  { key: r },
                  a().createElement(
                    "a",
                    { href: e.common.imgURL },
                    a().createElement("img", {
                      className: l,
                      src: t.src,
                      alt: t.alt,
                    })
                  )
                );
              })
            )
          );
        },
        k = "KCbYgkcFRSdeQtiWSrdc",
        S = "MJwqi1QXoetX0Rpc0VF4",
        C = function (e) {
          return a().createElement(
            "div",
            { className: "Ahrntx314hFVGwzHIUcc" },
            a().createElement(
              "a",
              {
                href: e.common.descriptionURL,
                className: "T8nc9ZF8_AnZx_tcNtz0",
              },
              a().createElement(
                "h3",
                { className: "WLPzHVEhwUSJMhdHX_4m" },
                e.common.title
              ),
              a().createElement(
                "div",
                { className: "CeInrxU_qvbcOJHzlNUX" },
                a().createElement("i", { className: "fas fa-arrow-right" })
              )
            ),
            a().createElement(
              "div",
              { className: "hipMqXSriBS0vAwkLauF" },
              a().createElement(
                "table",
                { className: "okPQTET8LpO47gulUQy0" },
                a().createElement(
                  "tbody",
                  null,
                  (function (e) {
                    for (
                      var t = Object.keys(e), r = [], l = 0;
                      l < t.length;
                      l++
                    )
                      e[t[l]].link
                        ? r.push(
                            a().createElement(
                              "tr",
                              { key: l },
                              a().createElement(
                                "td",
                                { className: k, key: "td" + l },
                                t[l]
                              ),
                              a().createElement(
                                "td",
                                { key: "td" + l, className: S },
                                a().createElement(
                                  "a",
                                  {
                                    href: e[t[l]].url,
                                    className: "FKBKlt3skRLtUnTzv1Dc",
                                  },
                                  e[t[l]].detail
                                )
                              )
                            )
                          )
                        : r.push(
                            a().createElement(
                              "tr",
                              { key: l },
                              a().createElement(
                                "td",
                                { className: k, key: "td" + l },
                                t[l]
                              ),
                              a().createElement(
                                "td",
                                { key: "td" + l, className: S },
                                e[t[l]].detail
                              )
                            )
                          );
                    return r;
                  })(e.common.information)
                )
              )
            ),
            a().createElement(
              "div",
              { style: { fontSize: "12pt", color: "#424242" } },
              e.common.descriptionText
            ),
            a().createElement(
              "div",
              { className: "YfpbIGwmvoybIN82ChLX" },
              a().createElement(
                "a",
                { href: e.common.place },
                a().createElement(
                  "span",
                  { className: "MrSJhfzhHQBe_Z0Ftmwo" },
                  a().createElement("i", {
                    className: "fas fa-map-marker-alt",
                    style: { color: "#06c755" },
                  }),
                  " ",
                  "지도"
                )
              ),
              a().createElement(
                "span",
                { className: "KMvcqJzTmSTTQEYF9fSY" },
                a().createElement("i", { className: "fas fa-share-square" })
              )
            )
          );
        },
        w = function (e) {
          return a().createElement(
            "div",
            { className: "AI2MWm_9lJfaJVeLEZU4" },
            a().createElement(y, { common: e.common }),
            a().createElement(C, { common: e.common })
          );
        },
        T = function (e) {
          return a().createElement(
            "div",
            {
              className: E.commonModule,
              style: { backgroundColor: e.mainCard.colorScheme.background },
            },
            a().createElement("div", {
              className: E.topBorder,
              style: { backgroundColor: e.mainCard.colorScheme.topBorder },
            }),
            a().createElement(
              "div",
              { className: E.topWrap },
              a().createElement(d, {
                title: e.mainCard.title,
                colorScheme: e.mainCard.colorScheme,
              }),
              a().createElement(h, {
                subTap: e.mainCard.subTap,
                colorScheme: e.mainCard.colorScheme,
              })
            ),
            a().createElement(
              "div",
              { className: E.contentWrap },
              "동물" === e.mainCard.title.type &&
                a().createElement(b, { common: e.mainCard.common }),
              "문화재" === e.mainCard.title.type &&
                a().createElement(w, { common: e.mainCard.common }),
              a().createElement(p, { similar: e.mainCard.similar })
            )
          );
        },
        I = "lTxjECTPG4UBmvZNHf3c",
        q = function (e) {
          return a().createElement(
            a().Fragment,
            null,
            a().createElement(
              "a",
              { href: e.blog.href, className: "zfSMHO_y817q0EiXwMff" },
              a().createElement("img", {
                src: e.blog.src,
                className: "xPrffqq6D1SX61SZ3UB5",
              }),
              a().createElement(
                "div",
                { className: "ysRcTDfJeP1GZSPKSG_E" },
                e.blog.title
              ),
              "true" === e.blog.influencer &&
                a().createElement(
                  a().Fragment,
                  null,
                  a().createElement("div", { className: I }),
                  a().createElement(
                    "div",
                    { className: "I0xNw6ThnzgKwWBLMReQ" },
                    "인플루언서"
                  )
                ),
              a().createElement("div", { className: I }),
              a().createElement(
                "div",
                { className: "CPTRr9N6TiKd_rBNc5OG" },
                e.blog.time
              )
            ),
            a().createElement(
              "div",
              { className: "qlMiDvQ7_n15RrZWkajs" },
              a().createElement(
                "a",
                { className: "L81lakcm4Yq06KIAVwDa" },
                a().createElement("div", { className: "cCCXqieAOnphelnaskY7" })
              )
            )
          );
        },
        x = function (e) {
          return a().createElement(
            a().Fragment,
            null,
            a().createElement(
              "a",
              { href: e.body.href, className: "cpemBvARtrSEgz7lUkjA" },
              e.body.title
            ),
            a().createElement(
              "div",
              { className: "Mg9HO7I6fwc0hV44FYXG" },
              a().createElement(
                "div",
                { className: "z3pxbTcDRwvKxEjZUbrK" },
                a().createElement(
                  "a",
                  { href: e.body.href, className: "YKtqpuf_ZtMRydltQdMR" },
                  e.body.detail
                )
              ),
              a().createElement(
                "a",
                { href: e.body.href, className: "lCq_k39ZKfwQG8trWAtQ" },
                a().createElement("img", {
                  src: e.body.src,
                  className: "jF9hBfIOS2OK66ZrtT45",
                })
              )
            )
          );
        },
        F = function (e) {
          return a().createElement(
            a().Fragment,
            null,
            0 !== e.tags.list.length &&
              a().createElement(
                "div",
                { className: "OlQTLqRbi1QIHzlwyrHs" },
                e.tags.list.map(function (e, t) {
                  return a().createElement(
                    "a",
                    { href: e.href, className: "Tg9q3QdcdPc23U3UZ661", key: t },
                    "#",
                    e.title
                  );
                })
              )
          );
        },
        R = function (e) {
          return a().createElement(
            "div",
            { className: "Hd2UNEr0aG2tf8bM6xJ2" },
            a().createElement(
              "a",
              { href: e.link.href, className: "eKCyJ71Kqd828donc8iP" },
              e.link.text
            )
          );
        },
        H = function (e) {
          return a().createElement(
            "div",
            { className: "yja0_WgnvkZy0Qfj5Fmx" },
            a().createElement(
              "div",
              { className: "XLD1f730RBaUCRhhHcC0" },
              a().createElement(
                "h2",
                { className: "MRmG8a87h4JafjtzI5hr" },
                "VIEW"
              )
            ),
            a().createElement(
              "ul",
              { className: "VsosLSygvvHF80EcKTmx" },
              e.view.list.map(function (e, t) {
                return a().createElement(
                  "li",
                  { className: "PN7t8uWKg24MvP9DZGtF", key: t },
                  a().createElement(
                    "div",
                    { className: "IiW4X4iQJ9DRfzQSxh7O" },
                    a().createElement(q, { blog: e.blog }),
                    a().createElement(x, { body: e.body })
                  ),
                  a().createElement(F, { tags: e.tags }),
                  a().createElement(R, { link: e.link })
                );
              })
            )
          );
        },
        K = function (e) {
          return a().createElement("div", null, "News");
        };
      var M = t(860),
        z = t(986),
        L = (t(689), t(582)),
        G = t(684),
        O = M.Router(),
        Q = M();
      Q.use(L()),
        Q.use(z.urlencoded({ extended: !1 })),
        Q.use(z.json()),
        Q.use("/", O),
        O.post("/", function (e, t) {
          var r;
          t.send(
            '\n    <!DOCTYPE html>\n    <html lang="ko">\n        <head>\n        <link rel="stylesheet" href="style.css">\n<script src=\'https://kit.fontawesome.com/a076d05399.js\' crossorigin=\'anonymous\'></script>\n        <script\n          src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"\n          data-auto-a11y="true"\n        ></script>\n        </head>\n        <body>\n            '.concat(
              G.renderToString(
                ((r = e.body),
                a().createElement(
                  "div",
                  { className: "hOkuBJSRIrHdsWQ4K9Zf" },
                  a().createElement(o, null),
                  a().createElement(
                    "div",
                    { className: "lwMSkhbL51TI_MbpDTZQ" },
                    a().createElement(T, { mainCard: r[0].mainCard }),
                    a().createElement(H, { view: r[0].view }),
                    a().createElement(K, null)
                  )
                ))
              ),
              "\n        </body>\n    </html>\n"
            )
          );
        }),
        Q.listen(4e3, function () {
          console.log(
            "Render Server listening at http://localhost:".concat(4e3)
          );
        });
    })();
})();