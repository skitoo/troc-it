FROM python:3.7
ENV PYTHONUNBUFFERED 1

RUN pip install pipenv

RUN mkdir /code
WORKDIR /code

ADD . /code/

RUN pipenv install --system
