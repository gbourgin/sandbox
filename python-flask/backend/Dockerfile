FROM python:2.7

WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

ENV FLASK_ENV=development

COPY . .

ENTRYPOINT [ "python" ]
CMD [ "main.py" ]