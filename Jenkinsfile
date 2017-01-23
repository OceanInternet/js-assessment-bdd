node {
    stage("Prepare environment") {
        checkout scm
        def environment  = docker.build 'js-assessment-node'

        environment.inside {
            stage("Checkout and build deps") {
                sh "npm install"
            }
            stage("Test") {
                sh "npm run gulp"
            }
        }
    }
    stage("Cleanup") {
        deleteDir()
    }
}
