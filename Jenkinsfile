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



// pipeline{
//     agent any
//
//     stages{
//         stage("SCM"){
//             steps{
//                 checkout scm
//             }
//         }
//         stage("Build"){
//             steps{
//                 sh 'npm install'
//             }
//         }
//         stage("Test"){
//             steps{
//                 sh 'npm run test'
//             }
//         }
//         stage("SonarQube Analysis"){
//             steps{
//                 sh 'echo build'
//             }
//         }
//         stage("Quality Gate"){
//             steps{
//                 sh 'echo build'
//             }
//         }
//         stage("Deploy"){
//             steps{
//                 sh 'echo build'
//             }
//         }
//     }
//
// }


pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000 -p 5000:5000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'echo tata'
            }
        }
        stage('Test') {
            steps {
                sh 'node run test'
            }
        }
    }
}