pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/Chellurigayathridevi/zomato-.git', branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t zomato-app:latest .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                   docker stop zomato || true
                   docker rm zomato || true
                   docker run -d --name zomato -p 9090:8080 zomato-app:latest
                '''
            }
        }
    }
}

