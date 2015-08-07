<?php
namespace DP\ProfileBundle\Entity;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Query\ResultSetMapping;

class ProfileRepository extends EntityRepository
{
    /**
     * @param  integer $id
     * @return Profile[]
     */
    public function findDuplicates($id)
    {
        $profile = $this->find($id);
        if (!$profile) {
            return array();
        }

        $rsm = new ResultSetMapping;
        $rsm->addEntityResult('DPProfileBundle:Profile', 'p');
        $rsm->addFieldResult('p', 'id', 'id');
        $rsm->addFieldResult('p', 'email', 'email');
        $rsm->addFieldResult('p', 'first_name', 'firstName');
        $rsm->addFieldResult('p', 'last_name', 'lastName');
        $rsm->addFieldResult('p', 'phone', 'phone');

        $sql = "SELECT * FROM (
                    SELECT * FROM profiles p WHERE p.last_name = :lastName
                    UNION
                    SELECT * FROM profiles p WHERE p.email = :email
                    UNION
                    SELECT * FROM profiles p WHERE p.phone = :phone
                ) as t WHERE t.id != :id";

        $query = $this->getEntityManager()->createNativeQuery($sql, $rsm);
        $query->setParameter('lastName', $profile->getLastName())
            ->setParameter('email', $profile->getEmail())
            ->setParameter('phone', $profile->getPhone())
            ->setParameter('id', $id);

        return $query->getResult();
    }
}
