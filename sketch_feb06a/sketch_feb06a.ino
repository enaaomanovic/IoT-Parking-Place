#include <ESP8266WiFi.h>
#include <Firebase.h>
#include <FirebaseArduino.h>
#include <FirebaseCloudMessaging.h>
#include <FirebaseError.h>
#include <FirebaseHttpClient.h>
#include <FirebaseObject.h>
#include <Servo.h>

#define FIREBASE_HOST "enaiot-default-rtdb.firebaseio.com"
#define FIREBASE_AUTH "WZiUxpOwqm86r4lhkOseRYrpq4HC8RJ48GVehPMB"
#define WIFI_SSID "AndroidAP9D6F"      //provide ssid (wifi name)
#define WIFI_PASSWORD "enaaaaaa"  //wifi passwordvoid setup()

Servo rampa;
const int pResistor = A0;  // Photoresistor at Arduino analog pin A0
int dioda=D3;
void setup() {
  rampa.attach(D0);
  pinMode(pResistor, INPUT);  // Set pResistor - A0 pin as an input (optional)
  pinMode(dioda, OUTPUT);
  Serial.begin(9600);  // connect to wifi.
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("connected: ");
  Serial.println(WIFI_SSID);
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  if (Firebase.failed()) {
    Serial.print(Firebase.error());
  } else {
    Serial.println("Firebase Connected");
  }
}
//Variables
int value;  // Store value from photoresistor (0-1023)
void loop() {
  bool rezervisano=Firebase.getBool("rezervisano");
  if(rezervisano==1){
     digitalWrite(dioda, HIGH);
     
  }
  else{ 
     digitalWrite(dioda, LOW);
  }
    //int variable = value.getInt();
   //Serial.print("Stored value in variable: ");
    //Serial.println(variable);
   //bool var=Firebase.getInt("foto2");
   //var=value;
   //Serial.println(var);
  value = analogRead(pResistor);
   Firebase.setInt(firebaseData,"foto2",value);
 
  Serial.println(rezervisano);
  Serial.println(value);
  if (value < 15 && rezervisano==0) {
    rampa.write(50);
    delay(1000);
  }
  else{
    rampa.write(0);
  }
  delay(3000);
}
