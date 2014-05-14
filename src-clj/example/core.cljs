;; https://gist.github.com/8324062.git
(ns example.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [<! chan put!]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(def app-state (atom {:projects
                      [{:id 1 :title "proj 1"}
                       {:id 2 :title "proj 2"}
                       {:id 3 :title "proj 3"}
                       {:id 4 :title "proj 4"}
                       {:id 5 :title "proj 5"}]}))

(enable-console-print!)

(def aidc (chan))

(defn update-aid [app aidx]
  (om/update! app assoc :aid aidx))

(defn handle-x [e p chan]
  (put! chan (:id p)))

(defn project-view [the-project owner opts]
  (om/component
    (dom/li
      #js {:onClick (om/bind handle-x the-project (:chan opts))}
      (str (:title the-project) " selected: " (:selected the-project)))))

(defn project-list [app owner opts]
  (om/component
    (dom/ul nil
      (om/build-all project-view
                    (:projects app)
                    {:key :id
                     :opts opts
                     :fn (fn [proj]
                           (cond-> proj
                             (= (:id proj) (:aid opts)) (assoc :selected true)
                             (not= (:id proj) (:aid opts)) (assoc :selected false)))}))))

(om/root app-state
  (fn [{:keys [projects] :as app} owner]
    (reify
      om/IWillMount
      (will-mount [_]
        (go (while true
          (let [aidx (<! aidc)]
            (update-aid app aidx)))))
      om/IRender
      (render [_]
        (dom/div nil
          (om/build project-list app {:opts {:aid (:aid app) :chan aidc}})))))
  (.getElementById js/document "app"))
