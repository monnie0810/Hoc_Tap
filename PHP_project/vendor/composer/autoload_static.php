<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit870caee5011712c62d63eef5820af3cf
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit870caee5011712c62d63eef5820af3cf::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit870caee5011712c62d63eef5820af3cf::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
