FROM node:16

RUN apt install git
RUN git clone https://github.com/j3mfilho/HomeWorks.git

WORKDIR HomeWorks/

RUN npm install

CMD [ "node", "server.js" ]