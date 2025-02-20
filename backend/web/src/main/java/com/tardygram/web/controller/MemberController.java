package com.tardygram.web.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.*;
import java.util.HashMap;
import java.util.List;

import javax.transaction.Transactional;

import com.tardygram.web.domain.MemberDTO;
import com.tardygram.web.entities.Meeting;
import com.tardygram.web.entities.Member;
import com.tardygram.web.repositories.MeetingRepository;
import com.tardygram.web.repositories.MemberRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * MemberController
 */
@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/member")
@Transactional
public class MemberController {
    @Autowired MemberRepository memberrepo;
    @Autowired MeetingRepository meetingrepo;

    //회원가입
    @PostMapping("/insertmember")
    public ResponseEntity<Member> insertMember(@RequestBody Member frontData){
        /* 중복아이디 검사 */
        // List<String> entity = new ArrayList<>();
        return new ResponseEntity<Member>(memberrepo.save(frontData), HttpStatus.OK);
    }

    //회원탈퇴
    @DeleteMapping("/deletemember")
    public ResponseEntity<String> deleteMember(){
        //Member m = new Member();
        //m.setMemberid("memberid");
        memberrepo.deleteById("c");
        return new ResponseEntity<String>("되어주세요", HttpStatus.OK);
    }

    // 회원한명검색
   @PostMapping("/selectone")
   public ResponseEntity<HashMap<String,String>> selectone(@RequestBody Member loginFd) {
       HashMap<String,String> map =new HashMap<>();
       try{
           Member repoData = memberrepo.findById(loginFd.getMemberid()).get();
           memberrepo.findById(loginFd.getMemberid());
            System.out.println("아이디 통과");
           if (loginFd.getPwd().equals(repoData.getPwd())) {
               System.out.println("비번 통과");
               map.put("status","sucess");
               map.put("dataid",loginFd.getMemberid());
               return new ResponseEntity<HashMap<String,String>>(map, HttpStatus.OK);
           } else {
               System.out.println("비번 실패");
               map.put("status","fail");
               map.put("msg","비밀번호가 틀렸습니다");
               return new ResponseEntity<HashMap<String,String>>(map, HttpStatus.OK);
           }
       } catch(Exception e) {
           System.out.println("실패");
           map.put("status","fail");
           map.put("msg","아이디 또는 비밀번호가 틀렸습니다");
           return new ResponseEntity<HashMap<String,String>>(map, HttpStatus.OK);
       }

   }


    //마이페이지 정보 보여주기
    @GetMapping("/mypage/{id}")
    public ResponseEntity<HashMap< String, Object >> mypage(@PathVariable String id){
        System.out.println("mypage 컨트롤러");
        System.out.println("프론트에서 오는 id : " + id);
        HashMap< String, Object > map = new HashMap<>();
        //c가왔을때
        //1. 그냥회원내용
        Member m1 = memberrepo.findById(id).get();
        map.put("uInfo",m1);

        
        //2. 방장, 진행O
        System.out.println("2번 : " + meetingrepo.selectMypage2(id));
        //List m2 =  meetingrepo.selectMypage2(id);
        //map.put("hostProgressEx",m2);
        List m2 = meetingrepo.selectMypage2(id);
        map.put("hostProgressEx",m2);


  
        //3. 방장, 진행X
        System.out.println("3번 : " + meetingrepo.selectMypage3(id));
        List m3 =  meetingrepo.selectMypage3(id);
        map.put("hostNotProgressEx",m3);

         //4. 방원, 진행O
        System.out.println("4번 : " + meetingrepo.selectMypage4(id));
        List m4 =  meetingrepo.selectMypage4(id);
        map.put("MemberProgressEx",m4);
        
        // //5. 방원, 진행X
        List m5 =  meetingrepo.selectMypage5(id);
        map.put("MemberNotProgressEx",m5);
        
  
        // System.out.println("list : "+list);
         return new ResponseEntity<HashMap< String, Object >>(map, HttpStatus.OK);

    }
    













    
}