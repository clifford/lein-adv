(ns example.repl
  (:require
    [clojure.browser.repl :as repl]))

(defn ^:export connect []
  (repl/connect "http://localhost:4555/repl"))
