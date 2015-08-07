<?php

namespace DP\ProfileBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Symfony\Component\Validator\Constraints;

class ProfileType extends AbstractType
{
    /**
     * @param FormBuilderInterface $builder
     * @param array $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('id', 'integer', array(
                'mapped'   => false,
                'required' => true,
            ))
            ->add('email', 'email', array(
                'constraints' => array(
                    new Constraints\NotBlank(),
                    new Constraints\Email()
                ),
            ))
            ->add('firstName', 'text', array(
                'constraints' => array(
                    new Constraints\NotBlank()
                ),
            ))
            ->add('lastName', 'text', array(
                'constraints' => array(
                    new Constraints\NotBlank()
                ),
            ))
            ->add('phone', 'text', array(
                'constraints' => array(
                    new Constraints\NotBlank()
                ),
            ))
        ;
    }

    /**
     * @param OptionsResolverInterface $resolver
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'csrf_protection' => false,
            'data_class' => 'DP\ProfileBundle\Entity\Profile'
        ));
    }

    /**
     * @return string
     */
    public function getName()
    {
        return 'dp_profile_bundle_profile';
    }
}
