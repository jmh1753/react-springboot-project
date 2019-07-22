package com.tardygram.web.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.*;
import java.util.HashMap;
import java.util.List;

import com.tardygram.web.domain.MemberDTO;
import com.tardygram.web.entities.Meeting;
import com.tardygram.web.entities.Member;
import com.tardygram.web.repositories.EnterRepository;
import com.tardygram.web.repositories.MeetingRepository;
import com.tardygram.web.repositories.MemberRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
* MemberController
*/
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/meeting")
public class MeetingController {
   @Autowired MemberRepository memberrepo;
   @Autowired MeetingRepository meetingrepo;
   @Autowired EnterRepository enterrepo;

   //방장이 모임방 개설
   @PostMapping("/insertMeeting")
   public void insertMeeting(){
       System.out.println("meeting insert");
       Meeting meeting = new Meeting();
       meeting.setCategory("moonho의 동창회2");
       meeting.setMeetingcharge(3000);
       meeting.setMeetingdate("19/07/28");
       meeting.setMeetingdetail("moonho와함께 엤날 즐거운 동창회2");
       meeting.setHostid("moonho");
       meeting.setMeetingplace("서울 비트캠프2");
       meeting.setMeetingprogress(1);
       meeting.setMeetingtitle(" 엤날 동창회으어2");     

       Member member1 = memberrepo.findById("moonho").get();
       //meeting.addMember(member1);
       member1.addMeeting(meeting);

       meetingrepo.save(meeting);

   }

   //모임방에 방원이 될 사람이 참여하기 버튼클릭시
   @PostMapping("/enter")
   public void enter(){
       Member m = new Member();
       m.setMemberid("c");

       enterrepo.enter(m, "4");
   }

   //연관테이블 레코드 삭제후 meeting테이블 레코드 삭제
   @DeleteMapping("/deleteroom")
   public void deleteroom(){      
        meetingrepo.deleteRoom((long)3);
        meetingrepo.deleteById((long)3);      
   }




   //해당 id에 해당하는 user의 meeting + meetingpeople 2개의 테이블 조인
   /* @GetMapping("getmeeting")
   public void getmeeting(){
       System.out.println("join테스트");
       List<Object[]> result = meetingrepo.joinlist("kz1324");
       System.out.println("result.get(0) "+result.get(0));
       System.out.println("Arrays.deepToString(result.get(0)) "+Arrays.deepToString(result.get(0)));
       for(int i = 0; i <result.size(); i++){
           for(int j=0; j<result.get(i).length; j++){
               System.out.println(result.get(i)[j]);
           }
           System.out.println("---------------");
       }
   } */












}