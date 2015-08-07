<?php

namespace DP\ProfileBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\HttpException;

use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Util\Codes;

use DP\ProfileBundle\Entity\Profile;
use DP\ProfileBundle\Form\ProfileType;

class ProfileController extends FOSRestController
{
    /**
     * @return array
     */
    public function getProfilesAction()
    {
        return $this->getRepository()->findAll();
    }

    /**
     * @param Request $request
     * @return array|\FOS\RestBundle\View\View
     */
    public function postProfileAction(Request $request)
    {
        $profile = new Profile();
        $form = $this->createForm(new ProfileType(), $profile, array(
            'method' => $request->getMethod(),
        ));
        $form->submit($request->request->all());

        if ($form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($profile);
            $entityManager->flush();

            return $this->view($profile, Codes::HTTP_CREATED);
        }

        return array(
            'form' => $form,
        );
    }

    /**
     * @param integer $id
     * @return null|Profile
     * @throws \Symfony\Component\HttpKernel\Exception\NotFoundHttpException
     */
    public function getProfileAction($id)
    {
        return $this->getEntity($id);
    }

    /**
     * @param integer $id
     * @param Request $request
     * @return array|\FOS\RestBundle\View\View
     */
    public function putProfileAction($id, Request $request)
    {
        $profile = $this->getEntity($id);
        $form = $this->createForm(new ProfileType(), $profile, array(
            'method' => $request->getMethod(),
        ));
        $form->submit($request->request->all());

        if ($form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($profile);
            $entityManager->flush();

            return $this->view(null, Codes::HTTP_NO_CONTENT);
        }

        return array(
            'form' => $form,
        );
    }

    /**
     * @param integer $id
     * @return \FOS\RestBundle\View\View
     */
    public function deleteProfileAction($id)
    {
        $profile = $this->getEntity($id);

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($profile);
        $entityManager->flush();

        return $this->view(null, Codes::HTTP_NO_CONTENT);
    }

    /**
     * @param integer $id
     * @return array
     */
    public function getProfileDuplicatesAction($id)
    {
        return $this->getRepository()->findDuplicates($id);
    }

    /**
     * @param $id
     * @return null|\DP\ProfileBundle\Entity\Profile
     * @throws \Symfony\Component\HttpKernel\Exception\NotFoundHttpException
     */
    private function getEntity($id)
    {
        $entity = $this->getRepository()->find($id);

        if (!$entity) {
            throw $this->createNotFoundException();
        }

        return $entity;
    }

    /**
     * @return \Doctrine\Common\Persistence\ObjectManager|object
     */
    private function getEntityManager()
    {
        return $this->getDoctrine()->getManager();
    }

    /**
     * @return \DP\ProfileBundle\Entity\ProfileRepository
     */
    private function getRepository()
    {
        return $this->getEntityManager()->getRepository('DPProfileBundle:Profile');
    }
}
