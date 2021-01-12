library(tidyverse)
library(cowplot)

# ggplot theme ------------------------------------------------------------
theme_set(
  theme_bw(base_size=14) +
    # Further modify the the theme
    theme(
     # axis.line    = element_line(), 
      axis.text    = element_blank(),
      axis.ticks   = element_blank(), 
      axis.title.x = element_blank(),
      axis.title.y = element_blank(),
      panel.grid   = element_blank(),
      panel.spacing = unit(1, "lines"),
      panel.border = element_blank(),
      plot.title   = element_text(hjust = .5)
    )
)

my_data <- tibble(
  x  = rnorm(500),
  y1 = x + rnorm(500),
  g  = rbinom(500,1,.5),
  y2 = y1 + 3*(g) + rnorm(500) 
)

scatter <- 
  my_data %>% 
  ggplot(aes(x,y1)) +
  geom_point(size = .5) +
  geom_smooth()

boxplot <- 
  my_data %>% 
  ggplot() +
  geom_boxplot(aes(as.factor(g), y2), notch = T)

histo <- 
  my_data %>% 
  ggplot() +
  geom_histogram(aes(x), color = "black") +
  scale_y_continuous(expand = c(0,0))

autos.data <- arima.sim(n = 500, model = list(order = c(1,0,1), ar = .8, ma = -.5), mean = 0, sd = 1) %>% 
  as.ts() %>% 
  acf(plot = F,lag.max = 100)

autos <- autos.data$acf %>% 
  as.data.frame() %>% 
  rownames_to_column(var = "time") %>% 
  mutate(time = as.numeric(time)) %>% 
  filter(time>1) %>% 
  ggplot(aes(time, V1)) +
  geom_hline(aes(yintercept = 0), size = .25) +
  geom_segment(aes(x = time, xend = time, y = 0, yend = V1)) +
  geom_point(size = .75) +
  theme(axis.line.x = element_blank())

visuals <- ggdraw() + 
  draw_plot(scatter, x = .00, y = 0, width = 0.33, height = 1) +
  draw_plot(boxplot, x = .33, y = 0, width = 0.33, height = 1) +
  draw_plot(histo,   x = .66, y = 0, width = 0.33, height = 1)

ggsave(visuals, filename = "content/portfolio/thumbs/viz.jpg", width = 4, height = 2, dpi = "retina")
