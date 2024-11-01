package com.thj.charviewer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@EnableCaching
@SpringBootApplication
public class CharviewerApplication {

  public static void main(String[] args) {
    SpringApplication.run(CharviewerApplication.class, args);
  }

}
