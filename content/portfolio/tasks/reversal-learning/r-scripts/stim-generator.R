library(tidyverse)
set.seed(725)

# Practice ----------------------------------------------------------------
prl_stim <- expand.grid(left  = c("fractal_01","fractal_02","null"),
                        up    = c("fractal_01","fractal_02","null"),
                        right = c("fractal_01","fractal_02","null"),
                        down  = c("fractal_01","fractal_02","null")) %>% 
  as_data_frame() %>% 
  map_df(as.character) %>% 
  mutate(nulls      = (up=="null")  + (left=="null")  + (down=="null")  + (right=="null"),
         fractal_01 = (up=="fractal_01") + (left=="fractal_01") + (down=="fractal_01") + (right=="fractal_01"),
         fractal_02 = (up=="fractal_02") + (left=="fractal_02") + (down=="fractal_02") + (right=="fractal_02")) %>% 
  filter(nulls==2,fractal_01==1,fractal_02==1) %>%
  mutate(key_answer = case_when(left  == "fractal_01" ~ 37,
                                up    == "fractal_01" ~ 38,
                                right == "fractal_01" ~ 39,
                                down  == "fractal_01" ~ 40),
         valid_key  = case_when(left  == "fractal_02" ~ 37,
                                up    == "fractal_02" ~ 38,
                                right == "fractal_02" ~ 39,
                                down  == "fractal_02" ~ 40)) %>% 
  select(left,up,right,down,key_answer,valid_key) %>% 
  sample_n(12)

map_chr(1:nrow(prl_stim),function(x){
  paste0("{stimulus: prl_stim(",prl_stim$left[x],",",prl_stim$up[x],",",prl_stim$right[x],",",prl_stim$down[x],")",
         ", choices: ","[",prl_stim$key_answer[x],",", prl_stim$valid_key[x],"]",
         ", key_answer: ",prl_stim$key_answer[x],
         ", data: {",
         "variable: 'prl_practice',",
         " answer: ", prl_stim$key_answer[x],",",
         " key1: ", prl_stim$key_answer[x],",",
         " key2: ", prl_stim$valid_key[x],",",
         " left: ",  str_pad(prl_stim$left[x], width = 10,side = "right"),",",
         " up: ",    str_pad(prl_stim$up[x],   width = 10,side = "right"),",",
         " right: ", str_pad(prl_stim$right[x],width = 10,side = "right"),",",
         " down: ",  str_pad(prl_stim$down[x], width = 10,side = "right"),
         "}}")
}) %>% cat(sep="\n")

# Block 1  ----------------------------------------------------
prl_stim_01 <- expand.grid(left  = c("fractal_03","fractal_04","null"),
                           up    = c("fractal_03","fractal_04","null"),
                           right = c("fractal_03","fractal_04","null"),
                           down  = c("fractal_03","fractal_04","null")) %>% 
  as_data_frame() %>% 
  map_df(as.character) %>% 
  mutate(nulls      = (up=="null")  + (left=="null")  + (down=="null")  + (right=="null"),
         fractal_03 = (up=="fractal_03") + (left=="fractal_03") + (down=="fractal_03") + (right=="fractal_03"),
         fractal_04 = (up=="fractal_04") + (left=="fractal_04") + (down=="fractal_04") + (right=="fractal_04")) %>% 
  filter(nulls==2,fractal_03==1,fractal_04==1) %>%
  mutate(key_answer = case_when(left  == "fractal_03" ~ 37,
                                up    == "fractal_03" ~ 38,
                                right == "fractal_03" ~ 39,
                                down  == "fractal_03" ~ 40),
         valid_key  = case_when(left  == "fractal_04" ~ 37,
                                up    == "fractal_04" ~ 38,
                                right == "fractal_04" ~ 39,
                                down  == "fractal_04" ~ 40)) %>% 
  select(left,up,right,down,key_answer,valid_key)

prl_stim_01 <- bind_rows(prl_stim_01,prl_stim_01) %>% 
  sample_n(24)

map_chr(1:nrow(prl_stim_01),function(x){
  paste0("{stimulus: prl_stim(",prl_stim_01$left[x],",",prl_stim_01$up[x],",",prl_stim_01$right[x],",",prl_stim_01$down[x],")",
         ", choices: ","[",prl_stim_01$key_answer[x],",", prl_stim_01$valid_key[x],"]",
         ", key_answer: ",prl_stim_01$key_answer[x],
         ", data: {",
         "variable: 'prl_01',",
         " answer: ", prl_stim_01$key_answer[x],",",
         " key1: ", prl_stim_01$key_answer[x],",",
         " key2: ", prl_stim_01$valid_key[x],",",
         " left: ",  str_pad(prl_stim_01$left[x], width = 10,side = "right"),",",
         " up: ",    str_pad(prl_stim_01$up[x],   width = 10,side = "right"),",",
         " right: ", str_pad(prl_stim_01$right[x],width = 10,side = "right"),",",
         " down: ",  str_pad(prl_stim_01$down[x], width = 10,side = "right"),
         "}}")
}) %>% cat(sep="\n")

# Block 2 ----------------------------------------
prl_stim_02 <- expand.grid(left  = c("fractal_05","fractal_06","null"),
                           up    = c("fractal_05","fractal_06","null"),
                           right = c("fractal_05","fractal_06","null"),
                           down  = c("fractal_05","fractal_06","null")) %>% 
  as_data_frame() %>% 
  map_df(as.character) %>% 
  mutate(nulls      = (up=="null")  + (left=="null")  + (down=="null")  + (right=="null"),
         fractal_03 = (up=="fractal_05") + (left=="fractal_05") + (down=="fractal_05") + (right=="fractal_05"),
         fractal_04 = (up=="fractal_06") + (left=="fractal_06") + (down=="fractal_06") + (right=="fractal_06")) %>% 
  filter(nulls==2,fractal_03==1,fractal_04==1) %>%
  mutate(key_answer = case_when(left  == "fractal_05" ~ 37,
                                up    == "fractal_05" ~ 38,
                                right == "fractal_05" ~ 39,
                                down  == "fractal_05" ~ 40),
         valid_key  = case_when(left  == "fractal_06" ~ 37,
                                up    == "fractal_06" ~ 38,
                                right == "fractal_06" ~ 39,
                                down  == "fractal_06" ~ 40)) %>% 
  select(left,up,right,down,key_answer,valid_key)

prl_stim_02 <- bind_rows(prl_stim_02,prl_stim_02) %>% 
  sample_n(24)

map_chr(1:nrow(prl_stim_02),function(x){
  paste0("{stimulus: prl_stim(",prl_stim_02$left[x],",",prl_stim_02$up[x],",",prl_stim_02$right[x],",",prl_stim_02$down[x],")",
         ", choices: ","[",prl_stim_02$key_answer[x],",", prl_stim_02$valid_key[x],"]",
         ", key_answer: ",prl_stim_02$key_answer[x],
         ", data: {",
         "variable: 'prl_02',",
         " answer: ", prl_stim_02$key_answer[x],",",
         " key1: ", prl_stim_02$key_answer[x],",",
         " key2: ", prl_stim_02$valid_key[x],",",
         " left: ",  str_pad(prl_stim_02$left[x], width = 10,side = "right"),",",
         " up: ",    str_pad(prl_stim_02$up[x],   width = 10,side = "right"),",",
         " right: ", str_pad(prl_stim_02$right[x],width = 10,side = "right"),",",
         " down: ",  str_pad(prl_stim_02$down[x], width = 10,side = "right"),
         "}}")
}) %>% cat(sep="\n")

# Block 3 ---------------------------------------------------
prl_stim_03 <- expand.grid(left  = c("fractal_07","fractal_08","null"),
                           up    = c("fractal_07","fractal_08","null"),
                           right = c("fractal_07","fractal_08","null"),
                           down  = c("fractal_07","fractal_08","null")) %>% 
  as_data_frame() %>% 
  map_df(as.character) %>% 
  mutate(nulls      = (up=="null")  + (left=="null")  + (down=="null")  + (right=="null"),
         fractal_05 = (up=="fractal_07") + (left=="fractal_07") + (down=="fractal_07") + (right=="fractal_07"),
         fractal_06 = (up=="fractal_08") + (left=="fractal_08") + (down=="fractal_08") + (right=="fractal_08")) %>% 
  filter(nulls==2,fractal_05==1,fractal_06==1) %>%
  mutate(key_answer = case_when(left  == "fractal_07" ~ 37,
                                up    == "fractal_07" ~ 38,
                                right == "fractal_07" ~ 39,
                                down  == "fractal_07" ~ 40),
         valid_key  = case_when(left  == "fractal_08" ~ 37,
                                up    == "fractal_08" ~ 38,
                                right == "fractal_08" ~ 39,
                                down  == "fractal_08" ~ 40)) %>% 
  select(left,up,right,down,key_answer,valid_key)

prl_stim_03 <- bind_rows(prl_stim_03,prl_stim_03) %>% 
  sample_n(24)

map_chr(1:nrow(prl_stim_03),function(x){
  paste0("{stimulus: prl_stim(",prl_stim_03$left[x],",",prl_stim_03$up[x],",",prl_stim_03$right[x],",",prl_stim_03$down[x],")",
         ", choices: ","[",prl_stim_03$key_answer[x],",", prl_stim_03$valid_key[x],"]",
         ", key_answer: ",prl_stim_03$key_answer[x],
         ", data: {",
         "variable: 'prl_03',",
         " answer: ", prl_stim_03$key_answer[x],",",
         " key1: ", prl_stim_03$key_answer[x],",",
         " key2: ", prl_stim_03$valid_key[x],",",
         " left: ",  str_pad(prl_stim_03$left[x], width = 10,side = "right"),",",
         " up: ",    str_pad(prl_stim_03$up[x],   width = 10,side = "right"),",",
         " right: ", str_pad(prl_stim_03$right[x],width = 10,side = "right"),",",
         " down: ",  str_pad(prl_stim_03$down[x], width = 10,side = "right"),
         "}}")
}) %>% cat(sep="\n")

# Block 4 ---------------------------------------------------
prl_stim_04 <- expand.grid(left  = c("fractal_09","fractal_10","null"),
                           up    = c("fractal_09","fractal_10","null"),
                           right = c("fractal_09","fractal_10","null"),
                           down  = c("fractal_09","fractal_10","null")) %>% 
  as_data_frame() %>% 
  map_df(as.character) %>% 
  mutate(nulls      = (up=="null")  + (left=="null")  + (down=="null")  + (right=="null"),
         fractal_05 = (up=="fractal_09") + (left=="fractal_09") + (down=="fractal_09") + (right=="fractal_09"),
         fractal_06 = (up=="fractal_10") + (left=="fractal_10") + (down=="fractal_10") + (right=="fractal_10")) %>% 
  filter(nulls==2,fractal_05==1,fractal_06==1) %>%
  mutate(key_answer = case_when(left  == "fractal_09" ~ 37,
                                up    == "fractal_09" ~ 38,
                                right == "fractal_09" ~ 39,
                                down  == "fractal_09" ~ 40),
         valid_key  = case_when(left  == "fractal_10" ~ 37,
                                up    == "fractal_10" ~ 38,
                                right == "fractal_10" ~ 39,
                                down  == "fractal_10" ~ 40)) %>% 
  select(left,up,right,down,key_answer,valid_key)

prl_stim_04 <- bind_rows(prl_stim_04,prl_stim_04) %>% 
  sample_n(24)

map_chr(1:nrow(prl_stim_04),function(x){
  paste0("{stimulus: prl_stim(",prl_stim_04$left[x],",",prl_stim_04$up[x],",",prl_stim_04$right[x],",",prl_stim_04$down[x],")",
         ", choices: ","[",prl_stim_04$key_answer[x],",", prl_stim_04$valid_key[x],"]",
         ", key_answer: ",prl_stim_04$key_answer[x],
         ", data: {",
         "variable: 'prl_04',",
         " answer: ", prl_stim_04$key_answer[x],",",
         " key1: ", prl_stim_04$key_answer[x],",",
         " key2: ", prl_stim_04$valid_key[x],",",
         " left: ",  str_pad(prl_stim_04$left[x], width = 10,side = "right"),",",
         " up: ",    str_pad(prl_stim_04$up[x],   width = 10,side = "right"),",",
         " right: ", str_pad(prl_stim_04$right[x],width = 10,side = "right"),",",
         " down: ",  str_pad(prl_stim_04$down[x], width = 10,side = "right"),
         "}}")
}) %>% cat(sep="\n")
