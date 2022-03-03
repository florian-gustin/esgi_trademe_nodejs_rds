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


// pipeline {
//     agent any
//
//     stages {
//         stage('Build') {
//             steps {
//                 nodejs(nodeJSInstallationName: 'nodejs') {
//                     sh 'npm config ls'
//                 }
//             }
//         }
//     }
// }



pipeline{
    agent any


    stages{
        stage("SCM"){
            steps{
                checkout scm
            }
        }
        stage("Build"){
            steps{
                nodejs(nodeJSInstallationName: 'nodejs') {
                    sh 'npm i'
                }
            }
        }
        stage("Test"){
            steps{
                nodejs(nodeJSInstallationName: 'nodejs') {
                    sh 'npm run test'
                }
            }
        }
        stage("SonarQube Analysis"){
            steps{
                sh 'echo SonarQube Analysis'
            }
        }
        stage("Quality Gate"){
            steps{
                sh 'echo Quality Gate'
            }
        }
        stage("Deploy"){
            steps{
                nodejs(nodeJSInstallationName: 'nodejs') {
                    sh 'npm install -g heroku'
                    sh 'heroku --version'
//                     sh '{
//                           echo cloud.infra.grp8@gmail.com | dd bs=256 conv=sync
//                           echo ]HS<-,K8<E4eqiB | dd bs=256 conv=sync
//                         } 2>/dev/null | heroku login -i'
//                     sh 'echo cloud.infra.grp8@gmail.com | {
//                           echo ]HS<-,K8<E4eqiB |
//                             expect 4<&0 <<'EOT'
//                             spawn heroku login -i
//                             set chan [open "/dev/fd/3"]
//                             gets $chan line
//                             expect "Email [cloud.infra.grp8@gmail.com]:"
//                             send "$line\r"
//                             close $chan
//                             set chan [open "/dev/fd/4"]
//                             gets $chan line
//                             expect "Password:"
//                             send "$line\r"
//                             close $chan
//                             expect eof
//                         EOT
//                         } 3<&0'
                    sh 'heroku login -i'
                    sh 'echo cloud.infra.grp8@gmail.com'
                    sh 'echo ]HS<-,K8<E4eqiB'
                    sh 'git add .'
                    sh 'git commit -am "make it better'
                    sh 'git push heroku master'
                }
            }
        }
    }
}


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

// pipeline {
//     agent any
//     stages {
//         stage('Test') {
//             agent {
//                 node {
//                     image 'node:6-alpine'
//                     args '-p 3000:3000 -p 5000:5000'
//                 }
//             }
//             steps {
//                 script{
//                     def docker = tool 'myDocker';
//                 }
//                 sh 'node --version'
//                 sh 'echo hello'
//             }
//         }
//     }
// }