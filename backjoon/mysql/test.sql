SELECT IF(10 > 5, '크다', '작다') AS result;

-- like
SELECT *
FROM Student
WHERE Student_ID like 'a%';

LIKE 'a%' // a로 시작되는 모든 것
LIKE 'a_%_%' // a로 시작되고 최소 3이상의 길이를 가진 것
LIKE '_a%' // 두번째 자리에 a가 들어가는 모든 것

-- in
select *
from Customers
where country in ('UK', 'Korea') // Customers 중 country가 UK이거나 KOREA인 것 다 뽑기

-- between
select *
from products
where price between 10 and 20;

select *
from products
where price not between 10 and 20;

select *
from products
where (price between 10 and 20) and not  id in(2,3); // 이렇게 쓸 수도 있다

-- NULL처리
SELECT ANIMAL_TYPE, IFNULL(NAME,'No name') AS NAME, SEX_UPON_INTAKE
FROM ANIMAL_INS

-- CASE처리
SELECT 
    seq, 
    CASE
        WHEN (u.seq BETWEEN 1 AND 3) THEN 
            CASE 
                WHEN (u.enabled IS TRUE) THEN 'A+'
                ELSE 'A0'
            END 
        WHEN (u.seq BETWEEN 4 AND 6) THEN
            CASE 
                WHEN (u.enabled IS TRUE) THEN 'B+'
                ELSE 'B0'
            END
        ELSE 'C+'
    END AS case_result
FROM `user` u

-- limit
// 지정한 숫자 개수 리턴
SELECT *
FROM
LIMIT 0,3; // 0번부터 3개

-- gorup by
select count(id)
from customers
group by country // 각 도시에 사는 사람이 몇명인지

-- 계산 MIN(), MAX(), COUNT(), AVG(), SUM()
select count(id) from products;
select avg(price) from products;
select sum(price) from products;

-- 테이블 합치기 중복값을 포함하고 싶은 경우 union all을 사용한다. 기본값은 중복제거
select *
from customers
union
select city from orders
order by city;

-- 테이블 교집합1
select test1.number 
from test1 join test2 on test1.number = test2.number;
-- 교집합2
select test1.number 
from test1 left join test2 on test1.number = test2.number;

-- 차집합(매칭된게 없도록)
select test1.*, test2.number 
from test1 
left outer join test2 
on test1.number = test2.number;
