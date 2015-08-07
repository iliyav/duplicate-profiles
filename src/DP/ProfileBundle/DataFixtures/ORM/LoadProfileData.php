<?php
namespace DP\ProfileBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use DP\ProfileBundle\Entity\Profile;

class LoadProfileData implements FixtureInterface
{
    /**
     * {@inheritDoc}
     */
    public function load(ObjectManager $manager)
    {
        $profile1 = new Profile();
        $profile1->setEmail('email1@domain.com');
        $profile1->setFirstName('Illia');
        $profile1->setLastName('Vavilin');
        $profile1->setPhone('12345');
        $manager->persist($profile1);

        $profile2 = new Profile();
        $profile2->setEmail('email2@domain.com');
        $profile2->setFirstName('il');
        $profile2->setLastName('vaviLIN');
        $profile2->setPhone('12856');
        $manager->persist($profile2);

        $profile3 = new Profile();
        $profile3->setEmail('email1@domain.com');
        $profile3->setFirstName('Anonymous');
        $profile3->setLastName('User');
        $profile3->setPhone('00000');
        $manager->persist($profile3);

        $profile4 = new Profile();
        $profile4->setEmail('email444@domain.com');
        $profile4->setFirstName('Other');
        $profile4->setLastName('Other');
        $profile4->setPhone('445566');
        $manager->persist($profile4);

        $manager->flush();
    }
}
