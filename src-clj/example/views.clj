(ns example.views
  (:require
    [hiccup
      [page :refer [html5]]
      [element :refer [javascript-tag]]
     [page :refer [include-js]]]
    ;; [cemerick.austin.repls :refer (browser-connected-repl-js)]
    [clojure.java.io :as io]
    [net.cgrand.enlive-html :as enlive]))

(defn- run-clojurescript [path init]
  (list
    (include-js path)
    (javascript-tag init)))

;; consolidate on either hiccup or enlive
;; (enlive/deftemplate page
;;   (io/resource "public/index.html")
;;   []
;;   [:body] (enlive/append
;;            (enlive/html [:script (browser-connected-repl-js)])))

;; (run-clojurescript
;;         "/js/main-debug.js"
;;         "example.repl.connect()")

;; (defn index-page []
;;   (page))
(defn index-page []
  (html5
    [:head
      [:title "REPL Demo"] ]
    [:body
     [:div "app"
      [:h1 "generated from src-clj/example/views.clj"]
      ;; [:script "http://fb.me/react-0.9.0.js"]
      ]]
    (include-js "http://fb.me/react-0.9.0.js")
    (run-clojurescript
        "/js/main-debug.js"
        "example.repl.connect()")
          ))

(defn repl-demo-page []
  (html5
    [:head
      [:title "REPL Demo"]]
    [:body
      [:h1 "REPL Demo"]
      [:hr]
      "This page is meant to be accessed by running this in one terminal:"
      [:pre "lein ring server-headless 3000"]
      "And then this in a different terminal:"
      [:pre "lein trampoline cljsbuild repl-launch firefox http://localhost:3000/repl-demo"]
      [:hr]
      "Alternately, you can run:"
      [:pre "lein ring server-headless 3000 &
lein trampoline cljsbuild repl-listen"]
      "And then browse to this page manually."]
      [:hr]
      [:h2 {:id "fun"} "Try some fun REPL commands!"]
      [:pre "> (js/alert \"Hello!\")
> (load-namespace 'goog.date.Date)
> (js/alert (goog.date.Date.))
> (.log js/console (reduce + [1 2 3 4 5]))
> (load-namespace 'goog.dom)
> (goog.dom.setTextContent (goog.dom.getElement \"fun\") \"I changed something....\") "]
      (run-clojurescript
        "/js/main-debug.js"
        "example.repl.connect()")))
