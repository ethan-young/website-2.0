file.copy("0-uikit-source/node_modules/uikit/dist","static/", overwrite = T, recursive = T)
file.copy("../../r-projects/multitool/docs/.", "static/r-pkgs/multitool/", overwrite = T, recursive = T)
blogdown::build_dir('static')