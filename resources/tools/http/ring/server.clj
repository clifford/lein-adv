;;; This namespace is used for development and testing purpose only.
(ns ring.server
  (:require [cemerick.austin.repls :refer (browser-connected-repl-js)]
            [net.cgrand.enlive-html :as enlive]
            ;; [compojure.route :refer  (resources)]
            [compojure.core :refer [defroutes GET PUT context]]
            [ring.adapter.jetty :as jetty]
            [clojure.java.io :as io]
            ;; [ring.util.response :refer [file-response]]
            [ring.middleware.edn :refer [wrap-edn-params]]
            [compojure.route :as route]
            [compojure.handler :as handler]
            ;; [hawk.core :as core]
            ))

(enlive/deftemplate page
  (io/resource "public/index.html")
  []
  [:body] (enlive/append
            (enlive/html [:script (browser-connected-repl-js)])))

(defroutes routes
  (GET "/" [] (page))
  (route/files "/" {:root "resources/public"})
  ;; (context "/api" [] core/api-routes)
  )



(def app
  (-> (handler/api routes)
      wrap-edn-params))

(defn run
  "Run the ring server. It defines the server symbol with defonce."
  []
  (defonce server
    (jetty/run-jetty #'app {:port 3000 :join? false}))
  server)
