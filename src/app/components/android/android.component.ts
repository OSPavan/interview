import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-android',
  templateUrl: './android.component.html',
  styleUrls: ['./android.component.scss']
})
export class AndroidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  questions: any = [
      'What are the components in android?',
      'What is an asset?',
      'What all dimensions of assets are there in android?',
      'Explain android internal architecture?',
      'What is android Activity? And its lifecycle methods?',
     ' What is android Fragments? And its lifecycle methods?',
      'What is an entry point in an application?',
      'Where do we add permission? What are permissions in android? Types of permissions?',
      'What happens if some process is running and in between user takes away the permission? What happens to the permission when user clears the app data?',
  '    How do you switch between one screen to another?',
     ' What are intent filters?',
     ' Can a fragment have multiple activity?',
    '  How does a fragment is put on an activity?',
      'What is Sqlite?',
'      How to send data between two applications?',
      'What are services? What are the types of services are there? How to create a service?',
'      What are bound and unbound services?',
      'What are the different components or context from which a service can be bounded?',
      'How to choose between services and threads?',
      'What are the components bind to services?',
 '     Different between services and intent services?',
     ' How does and intent service works? When will it be killed?',
      'Which parameters are to be taken care while uploading an app to playstore?',
     ' What is an 9-Patch image and webP?',
    '  How do you store an instance from configuration change?',
   '   When do you use fragment and when do you use activity?',
      'Can you run fragment without activity?',
   '   How many times oncreate gets called in fragment?',
    '  What are webservices in android?',
    '  What is MVP architecture?',
     ' What is MVVM architecture?',
    '  What are serializable and parcable?',
     ' How to handle 10MB file upload in retrofit in slow internet?',
     ' When does onstart gets called?',
    '  How to communicate between activities and fragments?',
   '   How do fragments communicate with activities?',
   '   How do two fragments communicate?',
    '  What is ANR? How do you avoid it?',
      'What are pending intent?',
   '   What are Sticky intent?',
 'Launch Modes in Android?'
  ]

}
