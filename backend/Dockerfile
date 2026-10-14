# Stage 1: Build ứng dụng Spring Boot
FROM gradle:9.7.1-jdk21-alpine AS build

WORKDIR /app

COPY build.gradle settings.gradle gradlew ./
COPY gradle/ ./gradle/
COPY src/ ./src/

RUN chmod +x gradlew
RUN ./gradlew clean bootJar --no-daemon

# Stage 2: Chạy ứng dụng
FROM eclipse-temurin:21-jre-alpine AS run

WORKDIR /app

COPY --from=build /app/build/libs/*.jar /app/app.jar

EXPOSE 8081

ENTRYPOINT ["java", "-jar", "/app/app.jar"]