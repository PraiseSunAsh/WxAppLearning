#!encoding: utf-8
# 导包
from selenium import webdriver

from selenium.webdriver.common.keys import Keys

dr = webdriver.Chrome()
dr.get('http://v.qq.com/vplus/7ac1ddbb7f09fc24d198c58fb86eb4dc?page=video&tdsourcetag=s_pcqq_aiomsg')
content = dr.find_element_by_class_name('top_des')
print(content.get_attribute('class'))
dr.quit()
