package Finalnyjj.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Finalnyjj.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: РасчетныйЛист
 */
@Entity(name = "IISFinalnyjjРасчетныйЛист")
@Table(schema = "public", name = "РасчетныйЛист")
public class RaschetnyjList {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерЛиста")
    private Integer номерлиста;

    @Column(name = "ДатаДок")
    private Date датадок;

    @Column(name = "Отправлено")
    private Boolean отправлено;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;

    @OneToMany(mappedBy = "raschetnyjlist", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<SostavRascheta> sostavraschetas;


    public RaschetnyjList() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерЛиста() {
      return номерлиста;
    }

    public void setНомерЛиста(Integer номерлиста) {
      this.номерлиста = номерлиста;
    }

    public Date getДатаДок() {
      return датадок;
    }

    public void setДатаДок(Date датадок) {
      this.датадок = датадок;
    }

    public Boolean getОтправлено() {
      return отправлено;
    }

    public void setОтправлено(Boolean отправлено) {
      this.отправлено = отправлено;
    }


}