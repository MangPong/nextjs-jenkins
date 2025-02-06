pipeline {
    agent any

    environment {
        DOCKER_SERVER = "43.208.241.236"
        WORKSPACE_DIR = "/var/lib/jenkins/workspace/66026178"
        REMOTE_DIR = "~/66026178"
    }

    stages {
        stage("Copy file to Docker server") {
            steps {
                script {
                    // ใช้ SSH Key (ต้องแน่ใจว่า Jenkins มี SSH Key Pair เชื่อมกับ Server)
                    sh "scp -o StrictHostKeyChecking=no -r ${WORKSPACE_DIR}/* root@${DOCKER_SERVER}:${REMOTE_DIR}"
                }
            }
        }
        
        stage("Build Docker Image") {
            steps {
                script {
                    // เช็คว่า Ansible ติดตั้งหรือไม่ก่อนรัน
                    sh "ssh -o StrictHostKeyChecking=no root@${DOCKER_SERVER} 'ansible-playbook ${REMOTE_DIR}/playbooks/build.yaml'"
                }
            }
        }
        
        stage("Create Docker Container") {
            steps {
                script {
                    // เช็คว่า Docker Container รันสำเร็จหรือไม่
                    sh "ssh -o StrictHostKeyChecking=no root@${DOCKER_SERVER} 'ansible-playbook ${REMOTE_DIR}/playbooks/deploy.yaml'"
                }
            }
        }
    }
}
