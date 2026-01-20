pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
        stage('log credential') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: '05053c55-9677-4f9c-bc73-bb0573d929aa', 
                        usernameVariable: 'USER-git', 
                        passwordVariable: 'PASS'
                    ),
                    sshUserPrivateKey(
                        credentialsId: '33049699-b31d-4db0-827e-f107c592cced',
                        keyFileVariable: 'KEY',
                        usernameVariable: 'USER',
                    )
                ]){
                  echo "Username: ${USER}"
                  echo "Password: ${PASS}"
                }
                
            }
        }
    }
}
