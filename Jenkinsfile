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


// pipeline {
//     agent {
//         docker {
//             image 'node:6-alpine'
//             args '-p 3000:3000 -p 5000:5000'
//         }
//     }
//     environment {
//         CI = 'true'
//     }
//     stages {
//         stage('Build') {
//             steps {
//                 sh 'npm install'
//                 sh 'echo tata'
//             }
//         }
//         stage('Test') {
//             steps {
//                 sh 'node run test'
//             }
//         }
//     }
// }



// Jenkinsfile

pipeline {
  // Assign to docker slave(s) label, could also be 'any'
  agent {
    label 'docker'
  }

  stages {
    stage('Docker node test') {
      agent {
        docker {
          // Set both label and image
          label 'docker'
          image 'node:7-alpine'
          args '--name docker-node' // list any args
        }
      }
      steps {
        // Steps run in node:7-alpine docker container on docker slave
        sh 'node --version'
      }
    }

    stage('Docker maven test') {
      agent {
        docker {
          // Set both label and image
          label 'docker'
          image 'maven:3-alpine'
        }
      }
      steps {
        // Steps run in maven:3-alpine docker container on docker slave
        sh 'mvn --version'
      }
    }
  }
}