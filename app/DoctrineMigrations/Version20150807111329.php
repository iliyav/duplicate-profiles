<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

class Version20150807111329 extends AbstractMigration
{
    public function up(Schema $schema)
    {
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE INDEX email_idx ON profiles (email)');
        $this->addSql('CREATE INDEX last_name_idx ON profiles (last_name)');
        $this->addSql('CREATE INDEX phone_idx ON profiles (phone)');
    }

    public function down(Schema $schema)
    {
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP INDEX email_idx ON profiles');
        $this->addSql('DROP INDEX last_name_idx ON profiles');
        $this->addSql('DROP INDEX phone_idx ON profiles');
    }
}
