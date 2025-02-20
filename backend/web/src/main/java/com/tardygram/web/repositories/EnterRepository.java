package com.tardygram.web.repositories;

import java.util.List;

import com.tardygram.web.entities.Member;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * MemberRepository
 */
@Repository
public interface EnterRepository extends CrudRepository<Member, String>{

    @Query(
        value = "insert into tbl_members_meetings (members_memberid, meetings_roomno) values(:memberid, :roomno)",
        nativeQuery = true
    )
    public void enter(Member memberid, String roomno);

    
}