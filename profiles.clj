{:shared {:clean-targets ["out" :target-path]}

 ;; :tdd [:shared
 ;;       {:cljsbuild
 ;;        {:builds {:hawk
 ;;                  {:compiler
 ;;                   {:optimizations :whitespace
 ;;                    :pretty-print true}}}}}]

 :dev [:shared
       {:resources-paths ["resources"]
        :source-paths ["resources/tools/http" "resources/tools/repl"]
        :dependencies [[ring "1.2.1"]
                       [compojure "1.1.6"]
                       [enlive "1.1.5"]
                       [fogus/ring-edn "0.2.0"]
                       [com.datomic/datomic-free "0.9.4718"]
                       ;; [com.datomic/datomic-free "0.9.4578"]
                       ]

        :plugins [[com.cemerick/austin "0.1.4"]]
        :cljsbuild {
                    :builds {
                             :dev {
                                   :source-paths ["src/cljs" "resources/tools/repl"]
                                   :jar true
                                   :compiler {:optimizations :whitespace
                                              :pretty-print true
                                              :output-to "resources/public/js/main-debug.js"
                                              :output-dir "resources/public/js"
                                              :source-map "resources/public/js/main-debug.js.map"
                                              }}}}
        :injections [(require '[ring.server :as http :refer [run]]
                              'cemerick.austin.repls)
                     (defn browser-repl-env []
                       (reset! cemerick.austin.repls/browser-repl-env
                                (cemerick.austin/repl-env)))
                     (defn browser-repl []
                       (cemerick.austin.repls/cljs-repl
                         (browser-repl-env)))]}]}
