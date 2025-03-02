pipeline {
    agent any

    environment {
        IMAGE_NAME = "my-next-app"
        CONTAINER_NAME = "next-app"
        DOCKER_REPO = "your-docker-hub-username"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', credentialsId: 'your-credentials-id', url: 'https://github.com/MangPong/nextjs-jenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Next.js') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build & Push') {
            steps {
                sh '''
                docker build -t $DOCKER_REPO/$IMAGE_NAME:latest .
                docker login -u $DOCKER_REPO -p your-docker-hub-password
                docker push $DOCKER_REPO/$IMAGE_NAME:latest
                '''
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                docker pull $DOCKER_REPO/$IMAGE_NAME:latest
                docker run -d --name $CONTAINER_NAME -p 3000:3000 $DOCKER_REPO/$IMAGE_NAME:latest
                '''
            }
        }
    }
}

