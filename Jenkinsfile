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
                    sh 'cat .heroku-netrc >> $HOME/.netrc'
//                     sh 'git remote remove origin'
//                     sh 'git remote add origin https://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@github.com/florian-gustin/esgi_trademe_nodejs_rds.git'
                    sh 'git config --global user.email "fgustin2@myges.fr"'
                    sh 'git config --global user.name "CI Project"'
                    sh 'git add .'
                    sh 'git commit -am "make it better"'
                    sh 'git push heroku master'
                }
            }
        }
    }
}


// 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