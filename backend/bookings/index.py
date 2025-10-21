"""
Business: Handle dance class booking submissions and save to database
Args: event - dict with httpMethod, body, queryStringParameters
      context - object with attributes: request_id, function_name
Returns: HTTP response dict with booking confirmation
"""

import json
import os
import psycopg2
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method == 'POST':
        body_data = json.loads(event.get('body', '{}'))
        
        name = body_data.get('name', '').strip()
        phone = body_data.get('phone', '').strip()
        email = body_data.get('email', '').strip()
        dance_style = body_data.get('danceStyle', '').strip()
        class_day = body_data.get('classDay', '').strip()
        class_time = body_data.get('classTime', '').strip()
        level = body_data.get('level', '').strip()
        instructor = body_data.get('instructor', '').strip()
        
        if not all([name, phone, dance_style, class_day, class_time]):
            return {
                'statusCode': 400,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': 'Заполните все обязательные поля'})
            }
        
        database_url = os.environ.get('DATABASE_URL')
        
        try:
            conn = psycopg2.connect(database_url)
            cur = conn.cursor()
            
            cur.execute(
                "INSERT INTO bookings (name, phone, email, dance_style, class_day, class_time, level, instructor) "
                "VALUES (%s, %s, %s, %s, %s, %s, %s, %s) RETURNING id",
                (name, phone, email, dance_style, class_day, class_time, level, instructor)
            )
            
            booking_id = cur.fetchone()[0]
            conn.commit()
            
            cur.close()
            conn.close()
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'success': True,
                    'bookingId': booking_id,
                    'message': f'Спасибо, {name}! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.'
                })
            }
            
        except Exception as e:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'error': 'Ошибка при сохранении заявки',
                    'details': str(e)
                })
            }
    
    if method == 'GET':
        database_url = os.environ.get('DATABASE_URL')
        
        try:
            conn = psycopg2.connect(database_url)
            cur = conn.cursor()
            
            cur.execute(
                "SELECT id, name, phone, email, dance_style, class_day, class_time, level, instructor, created_at "
                "FROM bookings ORDER BY created_at DESC LIMIT 100"
            )
            
            rows = cur.fetchall()
            
            bookings = []
            for row in rows:
                bookings.append({
                    'id': row[0],
                    'name': row[1],
                    'phone': row[2],
                    'email': row[3],
                    'danceStyle': row[4],
                    'classDay': row[5],
                    'classTime': row[6],
                    'level': row[7],
                    'instructor': row[8],
                    'createdAt': row[9].isoformat() if row[9] else None
                })
            
            cur.close()
            conn.close()
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'bookings': bookings})
            }
            
        except Exception as e:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'error': 'Ошибка при получении записей',
                    'details': str(e)
                })
            }
    
    return {
        'statusCode': 405,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({'error': 'Method not allowed'})
    }
