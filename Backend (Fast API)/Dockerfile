FROM python:3.12.0
WORKDIR /code
COPY ./requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY ./.env ./
COPY ./backend ./backend
EXPOSE 80
CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "80"]