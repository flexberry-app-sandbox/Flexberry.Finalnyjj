﻿




CREATE TABLE СоставРасчета (
 primaryKey UUID NOT NULL,
 Тип VARCHAR(10) NULL,
 Наименование VARCHAR(255) NULL,
 Сумма DOUBLE PRECISION NULL,
 Ндфл DOUBLE PRECISION NULL,
 Взносы DOUBLE PRECISION NULL,
 Всего DOUBLE PRECISION NULL,
 РасчетныйЛист UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE РасчетныйЛист (
 primaryKey UUID NOT NULL,
 НомерЛиста INT NULL,
 ДатаДок TIMESTAMP(3) NULL,
 Отправлено BOOLEAN NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Отделы (
 primaryKey UUID NOT NULL,
 Код INT NULL,
 Наименование VARCHAR(255) NULL,
 Организации UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СогласиеНаОпд (
 primaryKey UUID NOT NULL,
 Номер INT NULL,
 Подпись BOOLEAN NULL,
 Дата TIMESTAMP(3) NULL,
 Отправлено BOOLEAN NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Должности (
 primaryKey UUID NOT NULL,
 Код INT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ГрафикОтпуска (
 primaryKey UUID NOT NULL,
 Номер INT NULL,
 ДатаДок TIMESTAMP(3) NULL,
 ДатаНач TIMESTAMP(3) NULL,
 КолДней VARCHAR(255) NULL,
 Отправлено BOOLEAN NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Сотрудники (
 primaryKey UUID NOT NULL,
 Id INT NULL,
 Имя VARCHAR(255) NULL,
 Фамилия VARCHAR(255) NULL,
 Отчество VARCHAR(255) NULL,
 СерияПас VARCHAR(255) NULL,
 НомерПас VARCHAR(255) NULL,
 Отделы UUID NOT NULL,
 Организации UUID NOT NULL,
 Должности UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Организации (
 primaryKey UUID NOT NULL,
 Код INT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE СоставРасчета ADD CONSTRAINT FKe4b8ba9621180eb5596826ae598c571be265cb4e FOREIGN KEY (РасчетныйЛист) REFERENCES РасчетныйЛист; 
CREATE INDEX Indexe4b8ba9621180eb5596826ae598c571be265cb4e on СоставРасчета (РасчетныйЛист); 

 ALTER TABLE РасчетныйЛист ADD CONSTRAINT FK976df54fd7b4c696fc726b54ee5e2e9e4eec346b FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index976df54fd7b4c696fc726b54ee5e2e9e4eec346b on РасчетныйЛист (Сотрудники); 

 ALTER TABLE Отделы ADD CONSTRAINT FK20d702632cb50cf59226692046d56003b8bcf13c FOREIGN KEY (Организации) REFERENCES Организации; 
CREATE INDEX Index20d702632cb50cf59226692046d56003b8bcf13c on Отделы (Организации); 

 ALTER TABLE СогласиеНаОпд ADD CONSTRAINT FK4d340aa293a9ad4ebeed9e2dbebb3548248131ed FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index4d340aa293a9ad4ebeed9e2dbebb3548248131ed on СогласиеНаОпд (Сотрудники); 

 ALTER TABLE ГрафикОтпуска ADD CONSTRAINT FK62ed6af25570e40e214590e40d70c313a6e37cab FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index62ed6af25570e40e214590e40d70c313a6e37cab on ГрафикОтпуска (Сотрудники); 

 ALTER TABLE Сотрудники ADD CONSTRAINT FK3f0a97d2a7b05bd9e547ef58fd6ff8078d06ec89 FOREIGN KEY (Отделы) REFERENCES Отделы; 
CREATE INDEX Index3f0a97d2a7b05bd9e547ef58fd6ff8078d06ec89 on Сотрудники (Отделы); 

 ALTER TABLE Сотрудники ADD CONSTRAINT FK84d0ab5b65ab3fcf0fe4c85a43ea269225774525 FOREIGN KEY (Организации) REFERENCES Организации; 
CREATE INDEX Index84d0ab5b65ab3fcf0fe4c85a43ea269225774525 on Сотрудники (Организации); 

 ALTER TABLE Сотрудники ADD CONSTRAINT FKe5ecf5036053539899cbfb65cf7383292844b1ec FOREIGN KEY (Должности) REFERENCES Должности; 
CREATE INDEX Indexe5ecf5036053539899cbfb65cf7383292844b1ec on Сотрудники (Должности); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

