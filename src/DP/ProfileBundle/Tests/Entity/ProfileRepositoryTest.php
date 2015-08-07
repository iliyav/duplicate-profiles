<?php
namespace DP\ProfileBundle\Tests\Entity;

use Doctrine\Common\DataFixtures\Executor\ORMExecutor;
use Doctrine\Common\DataFixtures\Loader;
use Doctrine\Common\DataFixtures\Purger\ORMPurger;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

use DP\ProfileBundle\DataFixtures\ORM\LoadProfileData;

class ProductRepositoryFunctionalTest extends KernelTestCase
{
    /**
     * @var \Doctrine\ORM\EntityManager
     */
    private $em;

    /**
     * {@inheritDoc}
     */
    public function setUp()
    {
        $kernel = static::createKernel();
        $kernel->boot();
        $this->em = $kernel->getContainer()->get('doctrine.orm.entity_manager');

        $loader = new Loader();
        $loader->addFixture(new LoadProfileData());
        $purger = new ORMPurger($this->em);
        $purger->setPurgeMode(ORMPurger::PURGE_MODE_TRUNCATE);
        $executor = new ORMExecutor($this->em, $purger);
        $executor->execute($loader->getFixtures());
    }

    public function testFindDuplicatesByEmailAndLastName()
    {
        $profiles = $this->em
            ->getRepository('DPProfileBundle:Profile')
            ->findDuplicates(1);

        $this->assertCount(2, $profiles);
    }

    public function testFindDuplicatesByLastName()
    {
        $profiles = $this->em
            ->getRepository('DPProfileBundle:Profile')
            ->findDuplicates(2);

        $this->assertCount(1, $profiles);
    }

    public function testFindDuplicatesByEmail()
    {
        $profiles = $this->em
            ->getRepository('DPProfileBundle:Profile')
            ->findDuplicates(3);

        $this->assertCount(1, $profiles);
    }

    public function testFindDuplicatesWithEmptyResult()
    {
        $profiles = $this->em
            ->getRepository('DPProfileBundle:Profile')
            ->findDuplicates(4);

        $this->assertCount(0, $profiles);
    }

    /**
     * {@inheritDoc}
     */
    protected function tearDown()
    {
        parent::tearDown();
        $this->em->close();
    }
}
