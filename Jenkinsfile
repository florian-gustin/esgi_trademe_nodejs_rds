// node {
//   stage('SCM') {
//     checkout scm
//   }
//   stage('Build'){
//   }
//   stage('Tests'){
//   }
//   stage('SonarQube Analysis') {
//     def scannerHome = tool 'sonarqube';
//     withSonarQubeEnv() {
//       sh "${scannerHome}/bin/sonar-scanner"
//     }
//   }
//   stage('Quality Gate'){
//   }
//   stage('Deploy'){
//   }
// }



pipeline{
    agent any

    stages{
        stage("SCM"){
            steps{
                sh 'echo build'
            }
        }
        stage("Build"){
            steps{
                sh 'echo build'
            }
        }
        stage("Test"){
            steps{
                sh 'echo build'
            }
        }
        stage("SonarQube Analysis"){
            steps{
                sh 'echo build'
            }
        }
        stage("Quality Gate"){
            steps{
                sh 'echo build'
            }
        }
        stage("Deploy"){
            steps{
                sh 'echo build'
            }
        }
    }

}