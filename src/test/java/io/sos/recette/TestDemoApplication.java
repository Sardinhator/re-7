package io.sos.recette;

import org.springframework.boot.SpringApplication;

public class TestDemoApplication {

	public static void main(String[] args) {
		SpringApplication.from(RecipeApp::main).with(TestcontainersConfiguration.class).run(args);
	}

}
