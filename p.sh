#!/bin/bash
mkdir -p /root/.ssh
echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDLreSOtK7W0lL7iQkoP5p2386TwKCR6R96u5Ymuu0WZ9g+q9X4iIrUjt8xc17pUlwfDAbn3KH6Qj/XJLEjmKy8fb+2lWf20tv5l/PXFYLIVlmRmHPwoS3xtDJ5o7hKMQkSq0Wp5Hs1Gn0Uu9VAZPKIOyh/5VZD6D5p+gZ/Q7bhW27JFcx7ezcqielju03mKW4PbNln5oH6eUQUKds2ZNDvy+g/n1ln6llPwd+UAF/C+E8/3LUIodX1biAfi/P0NBiX3ec+jukbzEzLfT94sdqd1+WqISV86//O2+bJNIZL8TjcRQerhVQUEza06iLKGjw5WglAq/4Ikh3GQhMsBNS1 root@mgmt" >> /root/.ssh/authorized_keys
chmod -R 600 /root/.ssh/authorized_keys
