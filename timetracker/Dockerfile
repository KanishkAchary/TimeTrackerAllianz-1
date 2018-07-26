FROM openjdk:8-jdk-alpine
COPY target/timetracker-0.0.1-SNAPSHOT.jar /timetracker.jar
ENTRYPOINT ["/usr/bin/java"]
CMD ["-jar", "/timetracker.jar"]
EXPOSE 8888