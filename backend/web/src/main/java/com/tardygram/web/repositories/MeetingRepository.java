package com.tardygram.web.repositories;

import java.util.List;

import com.tardygram.web.entities.Meeting;
import com.tardygram.web.entities.Member;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * MemberRepository
 */
@Repository
public interface MeetingRepository extends JpaRepository<Meeting, Long>{

   /*  @Query(
        value = "select * from meeting JOIN meetingpeople ON meeting.roomno = meetingpeople.roomno2 WHERE memberid2=:memberid",
        nativeQuery = true    
    )
    public List<Object[]> joinlist(String memberid); */

    @Query(
        value = "delete from tbl_members_meetings where meetings_roomno= :roomno"
        , nativeQuery = true
    )
    public void deleteRoom(Long roomno);


    @Query(
        value = "select * from tbl_meeting m where m.meetingprogress=1 and m.hostid=:hostid "
        , nativeQuery = true
    )
    public List<Meeting> selectMypage2(String hostid);


    @Query(
        value = "select * from tbl_meeting mt JOIN tbl_members_meetings mm ON mt.roomno=mm.meetings_roomno where mt.meetingprogress=0 and mt.hostid= mm.members_memberid and mm.members_memberid=:memberid"
        , nativeQuery = true
    )
    public List<Object []> selectMypage3(String memberid);


    @Query(
        value = "select * from tbl_meeting mt JOIN tbl_members_meetings mm ON mt.roomno=mm.meetings_roomno where mt.meetingprogress=1 and mt.hostid!= mm.members_memberid and mm.members_memberid=:memberid"
        , nativeQuery = true
    )
    public List<Object []> selectMypage4(String memberid);


    @Query(
        value = "select * from tbl_meeting mt JOIN tbl_members_meetings mm ON mt.roomno=mm.meetings_roomno where mt.meetingprogress=0 and mt.hostid!= mm.members_memberid and mm.members_memberid=:memberid"
        , nativeQuery = true
    )
    public List<Object []> selectMypage5(String memberid);
}