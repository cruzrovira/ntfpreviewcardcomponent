import {
  e as h,
  j as e,
  F as n,
  a as o,
  V as f,
  B as d,
  I as s,
  T as i,
  L as m,
  D as g,
  R as p,
  b,
  C as v,
} from "./vendor.7a04d743.js"
const y = function () {
  const a = document.createElement("link").relList
  if (a && a.supports && a.supports("modulepreload")) return
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) c(r)
  new MutationObserver((r) => {
    for (const t of r)
      if (t.type === "childList")
        for (const l of t.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && c(l)
  }).observe(document, { childList: !0, subtree: !0 })
  function u(r) {
    const t = {}
    return (
      r.integrity && (t.integrity = r.integrity),
      r.referrerpolicy && (t.referrerPolicy = r.referrerpolicy),
      r.crossorigin === "use-credentials"
        ? (t.credentials = "include")
        : r.crossorigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    )
  }
  function c(r) {
    if (r.ep) return
    r.ep = !0
    const t = u(r)
    fetch(r.href, t)
  }
}
y()
const w = h({ styles: { global: { body: { color: "white" } } } })
var k = "./assets/image-equilibrium.90d2b484.jpg",
  x = "./assets/image-avatar.48c39391.png",
  I = "./assets/icon-ethereum.76974d10.svg",
  j = "./assets/icon-clock.725e4636.svg",
  C = "./assets/icon-view.fffad88f.svg"
function L() {
  return e(n, {
    bg: "gray.900",
    w: "100vw",
    minH: "100vh",
    justifyContent: "center",
    alignItems: "flex-start",
    pt: 5,
    children: o(f, {
      spacing: 4,
      p: 4,
      w: "360px",
      boxShadow: "md",
      rounded: 4,
      alignItems: "flex-start",
      bg: "gray.800",
      children: [
        o(d, {
          position: "relative",
          children: [
            e(s, { src: k, rounded: 4 }),
            e(d, {
              position: "absolute",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              _hover: {
                backgroundColor: "rgba(0,255,247,0.1)",
                backgroundImage: C,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              },
            }),
          ],
        }),
        e(i, {
          fontSize: "lg",
          fontWeight: "bold",
          color: "hsl(178, 100%, 50%)",
          as: "h1",
          cursor: "pointer",
          children: "Equilibrium #3429",
        }),
        e(i, {
          children: " Our Equilibrium collection promotes balance and calm.",
        }),
        o(n, {
          justifyContent: "space-between",
          w: "100%",
          children: [
            o(n, {
              alignItems: "center",
              children: [
                e(s, { src: I, w: 3, h: 4, mr: 2 }),
                e(m, {
                  href: "https://es.wikipedia.org/wiki/Ethereum",
                  target: "_blank",
                  children: e(i, {
                    color: "hsl(178, 100%, 50%)",
                    cursor: "pointer",
                    children: "0.041 ETH",
                  }),
                }),
              ],
            }),
            o(n, {
              alignItems: "center",
              children: [
                e(s, { src: j, w: 4, h: 4, mr: 2 }),
                e(i, { children: "3 days left" }),
              ],
            }),
          ],
        }),
        e(g, {}),
        o(n, {
          alignItems: "center",
          children: [
            e(s, {
              src: x,
              h: 10,
              w: 10,
              mr: 2,
              borderColor: "white",
              border: "1px solid",
              rounded: "full",
            }),
            o(i, {
              children: [
                "Creation of",
                e(i, {
                  as: "span",
                  color: "hsl(178, 100%, 50%)",
                  cursor: "pointer",
                  children: "\xA0 Jules Wyvern",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  })
}
p.render(
  e(b.StrictMode, { children: e(v, { theme: w, children: e(L, {}) }) }),
  document.getElementById("root")
)
