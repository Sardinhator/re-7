package io.sos.recipe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
public class RecipeApp {

	public static void main(String[] args) {
		SpringApplication.run(RecipeApp.class, args);
	}

}
