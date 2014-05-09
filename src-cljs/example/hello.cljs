(ns example.hello
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [put! chan <!]]))

(defn ^:export say-hello []
  (js/alert "salut!"))

(defn add-some-numbers [& numbers]
  (apply + numbers))
