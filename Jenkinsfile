pipeline{
    agent any

    stages{
        stage("SCM"){
            steps{
                checkout scm
            }
        }
        stage("Install"){
            steps{
                nodejs(nodeJSInstallationName: 'nodejs') {
                    sh 'npm i'
                    sh 'npm i -g sonar-scanner'
                }
            }
        }
        stage("Test"){
            steps{
                nodejs(nodeJSInstallationName: 'nodejs') {
                    sh 'npm test'
                }
            }
        }
        stage('SonarQube Analysis') {
            when {
                not {
                    changeRequest()
                }
            }
            steps {
                script {
                    nodejs(nodeJSInstallationName: 'nodejs') {
                        sh "sonar-scanner -Dsonar.projectKey=trademe_node_rds -Dsonar.branch.name=${env.BRANCH_NAME} -Dsonar.login=42da72506e9f28107cff53275b6354a42ff1edef -Dsonar.host.url=http://192.168.1.3:9000"
                    }
                }
            }
        }
        stage('SonarQube PR Analysis') {
             when {
                 changeRequest()
             }
            steps {
                script {
                    nodejs(nodeJSInstallationName: 'nodejs') {
                        sh "sonar-scanner -Dsonar.projectKey=trademe_node_rds -Dsonar.branch.name=${env.BRANCH_NAME} -Dsonar.login=42da72506e9f28107cff53275b6354a42ff1edef -Dsonar.host.url=http://192.168.1.3:9000"
                    }
                }
            }
        }
        stage("Deploy"){
            when {
                branch 'main'
            }
            steps{
                sh 'ssh esgi@192.168.1.14 -t " /home/esgi/.npm-global/bin/pm2 start" '
            }
        }
    }
}


// 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