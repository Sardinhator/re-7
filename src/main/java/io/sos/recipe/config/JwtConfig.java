package io.sos.recipe.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.oauth2.jose.jwk.Jwks;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder;

import java.security.KeyPair;
import java.security.KeyPairGenerator;

@Configuration
public class JwtConfig {

    private final KeyPair keyPair;

    public JwtConfig() {
        // Generate RSA key pair
        try {
            KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");
            keyPairGenerator.initialize(2048);
            this.keyPair = keyPairGenerator.generateKeyPair();
        } catch (Exception e) {
            throw new IllegalStateException("Could not generate RSA key pair", e);
        }
    }

    @Bean
    public JwtEncoder jwtEncoder() {
        return new NimbusJwtEncoder(Jwks.builder()
                .publicKey(keyPair.getPublic())
                .privateKey(keyPair.getPrivate())
                .build());
    }

    @Bean
    public JwtDecoder jwtDecoder() {
        return NimbusJwtDecoder.withPublicKey(keyPair.getPublic()).build();
    }
}

